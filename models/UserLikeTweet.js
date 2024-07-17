const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Tweet = require('./Tweet');

class UserLikeTweet extends Model {}

UserLikeTweet.init({
    idLike: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    sequelize,
    modelName: 'UserLikeTweet',
    tableName: 'userliketweet',
});

UserLikeTweet.belongsTo(User, { as: 'userliked', foreignKey: 'user_id' });
UserLikeTweet.belongsTo(Tweet, { as: 'tweetliked', foreignKey: 'tweet_id' });

module.exports = UserLikeTweet;
