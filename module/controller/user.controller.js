const userModel = require("../models/user.modelFunctions");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
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
module.exports.loginUser = (req, res) => {
  const userData = req.body.userData;
  userModel
    .loginUser(userData)
    .then((succ) => {
      const user = succ;
      const userId = user.id;
      const token = jwt.sign({ id: userId }, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "50m",
      });
      res.send({ status: true, token: token });
      // res.send({ status: true, user: userId });
    })
    .catch((err) => {
      res.send({ status: false, err: err });
    });
};
