const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

class Tweet extends Model {}

Tweet.init({
    idTweet: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING,
    publishDate: DataTypes.DATE,
}, {
    sequelize,
    modelName: 'Tweet',
    tableName: 'tweets',
});

Tweet.belongsTo(User, { as: 'autor', foreignKey: 'user_id' });

module.exports = Tweet;
