module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define(
    "subjects",
    {
      subjectName: {
        type: DataTypes.STRING(50),
        allowNull: false, // This will make it req field
      },
      cetagory: {
        type: DataTypes.STRING(30),
        allowNull: false, // This will make it req field
      },
      nameOfSubmitter: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
      },
      forClass: DataTypes.INTEGER(5),
      password: {
        type: DataTypes.STRING(40),
        allowNull: false, // This will make it req field
        unique: true,
      },
    },
    {
      updatedAt: false,
      createdAt: "created_at",
    }
  );
  return subject
};
