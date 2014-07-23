"use strict";
let Joi = require("joi");

let optionsSchema = Joi.object({
  connectionString: Joi.string(),
  options: Joi.object()
});

let mongoose = require("mongoose");
require("mongoose-q")(mongoose);

module.exports.register = function*(plugin, options){
  Joi.assert(options, optionsSchema);
  if(options.connectionString){
    yield mongoose.disconnect.bind(mongoose);
    mongoose.connect(options.connectionString, options.options || {});
  }
  plugin.expose("mongoose", mongoose);
};

module.exports.register.attributes = {
  pkg: require("./package.json")
};
