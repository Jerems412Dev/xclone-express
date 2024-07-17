const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tweet = require('./Tweet');

class Quote extends Tweet {}

Quote.init({}, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes',
});

Quote.belongsTo(Tweet, { as: 'tweetQuoted', foreignKey: 'tweetQuoted_id' });

module.exports = Quote;
