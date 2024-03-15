'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userinfo extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  userinfo.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
         
          notEmpty: { msg: "Email cant be Empty" },
          isEmail:{msg:"Invalid Email"},
          
        }
  },

    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userinfo',
  });
  return userinfo;
};