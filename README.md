# Sequelize Multi Tenant Enhancer

A Proxy based enhancer function which enables schema based multi tenancy in Sequelize.

## Installation

```
yarn add sequelize-multi-tenant-enhancer
```

## Caveats

* Requires Proxy support
* Only tested for Sequelize V3

## Example code

(Assumes that schemas with tables are already in place)

```
const enhance = require( 'sequelize-multi-tenant' );

const seq = someFunctionWhichInitializesTheDbAndDefinesAllModels();
const clientA = seq.withSchema( 'client-a' );
clientA.models.Foobars.findAll()
  .then( ( results ) => {
    ...
  } );
```
