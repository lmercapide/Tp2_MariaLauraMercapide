'use strict'

const { DataTypes } = require("sequelize")

module.exports = (sequelize, dataTypes) => {

    let Tratamiento = sequelize.define('tratamiento', {
        
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
        createdAt: {
            type: dataTypes.DATE,
            field: created_at,
            defaultValue: dataTypes.NOW,
            allowNull: false
        },
        updateAt: {
            type: dataTypes.DATE,
            field: updated_at,
            defaultValue: dataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: deleted_at,
            defaultValue: dataTypes.NOW,
            allowNull: false
        }
      
     }, { paranoid: true,
        freezeTableName: true,
    })
 
     Tratamiento.HasMany = models => {
    }
    return Tratamiento

  }


