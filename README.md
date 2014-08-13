co-hapi-mongoose
===========
[![Build](https://travis-ci.org/bandwidthcom/co-hapi-mongoose.png)](https://travis-ci.org/bandwidthcom/mongoose)
[![Dependencies](https://david-dm.org/bandwidthcom/co-hapi-mongoose.png)](https://david-dm.org/bandwidthcom/mongoose)


This is hapi plugins which adds mongoose support to the app. You can get access to mongoose instance via `server.plugins["co-hapi-mongoose"].mongoose`.
## Dependencies
Module `co-hapi` is required to use this plugin.
Node 0.11+ should be used with --harmony switch.

## Options
`connectionString`  if defined the plugin will connect to given database

