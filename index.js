const modelProxyHandler = ( seqProxy ) => ( {
  get( target, name ) {
    // Force the model to use our proxy instead of the real sequelize instance
    if ( name === 'sequelize' ) {
      return seqProxy;
    }
    return target[ name ];
  },
} );

const proxyHandler = ( schemas ) => ( {
  get( target, name, receiver ) {
    if ( name === 'models' ) {
      // All models need to be wrapped in order to override their sequelize insstances
      return new Proxy( target.models, {
        get( modelTarget, modelName ) {
          return new Proxy( modelTarget[ modelName ], modelProxyHandler( receiver ) );
        },
      } );
    }
    if ( name === 'options' ) {
      // Exploit the options by inserting custom values into the query defaults object.
      // This should work for all forms of queries as query() is used by all higher functions such as findById etc
      const options = target[ name ] || {};
      if ( !Reflect.has( options, 'query' ) ) {
        options.query = {};
      }
      if ( !Reflect.has( options.query, 'searchPath' ) ) {
        options.query.searchPath = schemas.join( ',' );
      }
      return options;
    }
    return target[ name ];
  },
} );

/**
 * Enhance a sequelize instance with schema based multitenancy
 *
 * @param {Object}    Sequelize instance
 * @returns {Proxy}   Sequelize instance wrapped with a Proxy
 */
const enhanceMutliTenant = ( seq ) => {
  seq.withSchema = ( ...schema ) => new Proxy( seq, proxyHandler( schema ) ); // eslint-disable-line no-param-reassign
  return seq;
};

module.exports = enhanceMutliTenant;
