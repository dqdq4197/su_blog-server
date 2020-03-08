'use strict';
module.exports = (sequelize, DataTypes) => {
  const p_like = sequelize.define('p_like', {
    u_Id: DataTypes.STRING
  }, {
    charset:'utf8',
    collate:'utf8_general_ci',
  });
  p_like.associate = function(models) {
    p_like.belongsTo(models.post, {
      foreignKey: "postId"
    })
  };
  return p_like;
};