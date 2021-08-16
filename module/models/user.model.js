// const db = require("../../dbHelper/connection");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 5,
        max: 100,
        is: /^[A-Za-z .]+$/i,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 4,
        max: 7,
        is: /^[A-Za-z .]+$/i,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 4,
        max: 20,
        is: /^[A-Za-z .]+$/i,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
        unique: true, // This will make it req field
        min: 6,
        max: 16,
        is: /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/i,
      },
    },
    {
      updatedAt: false,
      createdAt: "created_at",
    }
  );
  return user
};
