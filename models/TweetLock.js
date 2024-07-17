const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Tweet = require('./Tweet');

class TweetLock extends Model {}

TweetLock.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    sequelize,
    modelName: 'TweetLock',
    tableName: 'tweetlocks',
});

TweetLock.belongsTo(User, { as: 'tweetlocker', foreignKey: 'locker_id' });
TweetLock.belongsTo(Tweet, { as: 'locked', foreignKey: 'tweetlocked_id' });

module.exports = TweetLock;
