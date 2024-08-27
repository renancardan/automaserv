const Sequelize = require('sequelize');

const sequelize = new Sequelize('automaserv', 'root', 'cardan', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306
});

module.exports = sequelize