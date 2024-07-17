const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

class UserFollow extends Model {}

UserFollow.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    sequelize,
    modelName: 'UserFollow',
    tableName: 'userfollows',
});

UserFollow.belongsTo(User, { as: 'follower', foreignKey: 'follower_id' });
UserFollow.belongsTo(User, { as: 'followed', foreignKey: 'followed_id' });

module.exports = UserFollow;
