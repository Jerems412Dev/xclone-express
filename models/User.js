const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}

User.init({
    idUser: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    location: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth: DataTypes.STRING,
    website: DataTypes.STRING,
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    coverPicture: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
});

module.exports = User;
