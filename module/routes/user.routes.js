const express = require("express");
const { grantAccess } = require("../verification");
const router = express.Router();
const controller = require("../controller/user.controller");
router.post("/add-new", controller.addNewStudent);
router.get("/", grantAccess(["admin"]), controller.findAllStudent);
router.get("/delete-user/:id", controller.deleteSpecficStudent);
router.post("/update-user/:id", controller.updateSpecficStudent);
router.post("/loginUser", controller.loginUser);

module.exports = router;
