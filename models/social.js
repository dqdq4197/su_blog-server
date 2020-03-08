'use strict';
module.exports = (sequelize, DataTypes) => {
  const social = sequelize.define('social', {
    git: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    home: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    charset:'utf8',
    collate:'utf8_general_ci',
  });
  social.associate = function(models) {
    social.hasOne(models.user, {
      foreignKey: "userId"
    })
  };
  return social;
};