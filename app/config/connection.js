var Sequelize = require("sequelize");
// var keys=require("keys.js");
//var keys=require("../config/keys.js");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_passport", "root", "90099109", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
