const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbxcloneexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;