const { DataTypes } = require('sequelize')
const sequelize = require('../db/index')

const User = sequelize.define(
    'Users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
          },
          firstName: {
            type: DataTypes.STRING,
          },
          lastName: {
            type: DataTypes.STRING,
          },
          login: {
            type: DataTypes.STRING,
            unique:true
          },
          password: {
            type: DataTypes.STRING,
          },
          role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
          },
          ip: {
            type: DataTypes.STRING,
          },
          descipt: {
            type: DataTypes.STRING,
          },
          o_sebe: {
            type: DataTypes.STRING,
          },
          soc_set: {
            type: DataTypes.STRING,
          },
          age: {
            type: DataTypes.STRING,
          },
          likes__foto: {
            type: DataTypes.STRING,
          },
          coment__foto: {
            type: DataTypes.STRING,
          },
    }
)



module.exports = User