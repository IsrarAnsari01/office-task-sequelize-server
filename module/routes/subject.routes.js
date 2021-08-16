const express = require("express");
const router = express.Router();
const controller = require("../controller/student.controller");
const { grantAccess } = require("../verification");
router.post("/add-new",  controller.addNewSubject);
router.get("/", controller.findAllSubject);
router.post("/delete-user/:id", controller.deleteSpecficSubject);
router.post("/update-user/:id", controller.updateSubjectDetails);
module.exports = router;
