const Sequelize = require("sequelize");

const db = new Sequelize("mydb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
