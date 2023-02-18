const Sequelize = require("sequelize");
const db = require('../config/database');

const {DataTypes} = Sequelize;
const UserModel = db.define('users', {
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate:{
            notEmpty: true
        }
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3,100]
        }
    },
    jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3,100]
        }
    },
    
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});
module.exports = UserModel;