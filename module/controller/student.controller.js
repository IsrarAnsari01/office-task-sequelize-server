const subjectModel = require("../models/subject.modelFunction");
module.exports.addNewSubject = (req, res) => {
  const subjectDetails = req.body.subjectDetails;
  subjectModel
    .saveNewSubject(subjectDetails)
    .then((succ) => {
      res.send({ status: true, save: true });
    })
    .catch((err) => {
      res.send({ status: false, save: false });
    });
};
module.exports.findAllSubject = (req, res) => {
  subjectModel
    .findAllSubjects()
    .then((succ) => {
      res.send({ status: true, found: succ });
    })
    .catch((err) => {
      res.send({ status: false, found: false });
    });
};
module.exports.deleteSpecficSubject = (req, res) => {
  subjectModel
    .deleteSubject(req.params.id)
    .then((succ) => {
      res.send({ status: true, delete: true });
    })
    .catch((err) => {
      res.send({ status: false, delete: false });
    });
};
module.exports.updateSubjectDetails = (req, res) => {
  const subjectDetails = req.body.subjectDetails;
  subjectModel
    .updateSubject(subjectDetails, req.params.id)
    .then((succ) => {
      res.send({ status: true, save: true });
    })
    .catch((err) => {
      res.send({ status: false, save: false });
    });
};
