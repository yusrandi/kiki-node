const Sequelize = require("sequelize");
const db = require('../config/database');
const UserModel = require('../models/user_model');

const {DataTypes} = Sequelize
const AbsenModel = db.define('absens', {
   
    bulan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    userNik: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3,100]
        }
    },
    
    hadir: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
    
    izin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
    izinT: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
   
    sakit: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
    sakit1: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
    alpha: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
    cuti: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            
        }
    },
   
}, {
    freezeTableName: true
})

UserModel.hasMany(AbsenModel);
AbsenModel.belongsTo(UserModel, {foreignKey: 'userNik'});

module.exports = AbsenModel;
