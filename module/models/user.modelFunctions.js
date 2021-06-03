const db = require("../../dbHelper/connection");
module.exports.saveNewUser = async (userData) => {
  try {
    var user = await db.user.create(userData);
  } catch (err) {
    console.log(err);
  }
  return user;
};
module.exports.deleteUser = async (userId) => {
  try {
    var delUser = await db.user.destroy({
        
      where: {
        id: userId,
      },
    });
  } catch (err) {
    console.log(err);
  }
  return delUser;
};
module.exports.findAllUser = async () => {
  try {
    var allUser = await db.user.findAll();
  } catch (err) {
    console.log(err);
  }
  return allUser;
};
module.exports.updateUser = async (userInfo, id) => {
  try {
    var updatedUser = await db.user.update(userInfo, {
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
  return updatedUser;
};
