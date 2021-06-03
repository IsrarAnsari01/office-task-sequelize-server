const userModel = require("../models/user.modelFunctions");
module.exports.addNewStudent = (req, res) => {
  const userData = req.body.userData;
  userModel
    .saveNewUser(userData)
    .then((succ) => {
      res.send({ status: true, save: true });
    })
    .catch((err) => {
      res.send({ status: false, err: err });
    });
};
module.exports.findAllStudent = (req, res) => {
  userModel
    .findAllUser()
    .then((succ) => {
      res.send({ status: true, found: succ });
    })
    .catch((err) => {
      res.send({ status: false, err: err });
    });
};
module.exports.deleteSpecficStudent = (req, res) => {
  userModel
    .deleteUser(req.params.id)
    .then((succ) => {
      res.send({ status: true, delete: true });
    })
    .catch((err) => {
      res.send({ status: false, err: err });
    });
};
module.exports.updateSpecficStudent = (req, res) => {
  const userData = req.body.userData;
  userModel
    .updateUser(userData, req.params.id)
    .then((succ) => {
      res.send({ status: true, save: true });
    })
    .catch((err) => {
      res.send({ status: false, err: err });
    });
};
