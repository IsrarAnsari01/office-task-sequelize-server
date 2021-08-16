const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("js_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../module/models/user.model")(sequelize, DataTypes);
db.subject = require("../module/models/subject.model")(sequelize, DataTypes);
(() => {
  sequelize
    .authenticate()
    .then(() =>
      console.log(
        "Connected to DB successfully: ",
        db.user + "And" + db.subject
      )
    )
    .catch((err) => console.log("Error in Connection through sequelize", err));
})();
db.sequelize
  .sync({ alter: true})
  .then(() => console.log("Re-Sync Successfully"));
module.exports = db;
