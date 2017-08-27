
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		about : {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false },
		last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;
