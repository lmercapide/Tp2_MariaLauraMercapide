'use strict'

const { DataTypes } = require("sequelize")

module.exports = (sequelize, dataTypes) => {

    let Paciente = sequelize.define('paciente', {
        
        id: {
            type: dataTypes.BIGINT,
            autoincrement:true,
            primarykey: true,
            allownull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allownull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allownull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'created_at',
            defaultValue: dataTypes.NOW,
            allowNull: false
        },
        updateAt: {
            type: dataTypes.DATE,
            field: 'updated_at',
            defaultValue: dataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: 'deleted_at',
            defaultValue: dataTypes.NOW,
            allowNull: false
        }
     }, { paranoid: true,
        freezeTableName: true,
    })
 
     Paciente.HasMany = models => {
    }
    return Paciente

  }


