"use strict";
let mongoose = require("mongoose");
require("mongoose-q")(mongoose);

module.exports.register = function*(plugin, options){
  if(options.connectionString){
    mongoose.connect(options.connectionString, options.options || {});
  }
  plugin.expose("mongoose", mongoose);
};

module.exports.register.attributes = {
  pkg: require("./package.json")
};
