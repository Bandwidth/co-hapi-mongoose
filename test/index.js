"use strict";
let Hapi = require("co-hapi");
let Mongoose = require("mongoose").constructor;
describe("mongoose", function(){
  let server;
  before(function*(){
    server = Hapi.createServer("localhost", 3001);
    yield server.pack.register(require(".."));
  });
  it("should return mongoose instance", function*(){
    server.plugins["co-hapi-mongoose"].mongoose.should.be.an.instanceOf(Mongoose);
  });
});
