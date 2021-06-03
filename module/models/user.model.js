// const db = require("../../dbHelper/connection");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "students",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING(7),
      class: DataTypes.INTEGER(5),
      email: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
        unique: true,
      },
      password: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
        unique: true, // This will make it req field
      },
    },
    {
      updatedAt: false,
      createdAt: "created_at",
    }
  );
  return user
};
