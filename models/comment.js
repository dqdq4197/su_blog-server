'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    postId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    parent: DataTypes.INTEGER,
    seq: DataTypes.INTEGER
  }, {
    charset:'utf8',
    collate:'utf8_general_ci',
  });
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.post, {
      foreignKey: "postId"
    })
  };
  return comment;
};