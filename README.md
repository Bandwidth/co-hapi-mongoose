mongoose
===========
[![Build](https://travis-ci.org/avbel/mongoose.png)](https://travis-ci.org/avbel/mongoose)
[![Dependencies](https://david-dm.org/avbel/mongoose.png)](https://david-dm.org/avbel/mongoose)


This is hapi plugins which adds mongoose support to the app. You can get access to mongoose instance via `server.plugins["co-hapi-mongoose"].mongoose`.
## Dependencies
Module `co-hapi` is required to use this plugin.
Node 0.11+ should be used with --harmony switch.

## Options
`connectionString`  if defined the plugin will connect to given database

