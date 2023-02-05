const sequelize = require('../db/index')
const { DataTypes } = require('sequelize')

const Post = sequelize.define(
    'Posts',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
          },
          title: {
            type: DataTypes.STRING,
          },
          body:{
            type: DataTypes.STRING
          },
          mainImg:{
            type: DataTypes.STRING
          },
          publicationDate:{
            type: DataTypes.DATE
          },
          countLike:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
          },
          comment:{
            type: DataTypes.STRING,
            defaultValue:0,
          },
          countViews:{
            type: DataTypes.INTEGER,
            defaultValue: 0
          },
          avtor:{
            type: DataTypes.STRING
          },
          tag:{
            type: DataTypes.STRING
          },
          postAdmin:{
            type: DataTypes.STRING
          }
    }
)



module.exports = Post
