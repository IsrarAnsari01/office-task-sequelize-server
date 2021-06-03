const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");
router.post("/add-new", controller.addNewStudent);
router.get("/", controller.findAllStudent);
router.get("/delete-user/:id", controller.deleteSpecficStudent);
router.post("/update-user/:id", controller.updateSpecficStudent);
module.exports = router;
