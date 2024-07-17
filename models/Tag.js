const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tweet = require("./Tweet");

class Tag extends Model {}

Tag.init({
    idTag: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags',
});



module.exports = Tag;
