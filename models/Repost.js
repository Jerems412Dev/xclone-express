const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tweet = require('./Tweet');

class Repost extends Tweet {}

Repost.init({}, {
    sequelize,
    modelName: 'Repost',
    tableName: 'reposts',
});

Repost.belongsTo(Tweet, { as: 'tweetReposted', foreignKey: 'tweetReposted_id' });

module.exports = Repost;
