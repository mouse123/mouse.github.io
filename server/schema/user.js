/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: "0"
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'user'
  });
};
