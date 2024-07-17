const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tweet = require('./Tweet');

const MediaType = {
    VIDEO: 'VIDEO',
    PICTURE: 'PICTURE',
};

class Media extends Model {}

Media.init({
    idMedia: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.ENUM(MediaType.VIDEO, MediaType.PICTURE),
    link: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Media',
    tableName: 'media',
});

Media.belongsTo(Tweet, { foreignKey: 'tweet_id' });

module.exports = Media;
