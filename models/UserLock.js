const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

class UserLock extends Model {}

UserLock.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    sequelize,
    modelName: 'UserLock',
    tableName: 'userlocks',
});

UserLock.belongsTo(User, { as: 'locker', foreignKey: 'locker_id' });
UserLock.belongsTo(User, { as: 'locked', foreignKey: 'locked_id' });

module.exports = UserLock;
