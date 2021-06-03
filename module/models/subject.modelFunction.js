const db = require("../../dbHelper/connection");
module.exports.saveNewSubject = async (subjectDetails) => {
    try {
      var newSubject = await db.subject.create(subjectDetails);
    } catch (err) {
      console.log(err);
    }
    return newSubject;
  };
  module.exports.deleteSubject = async (subjectId) => {
    try {
      var delSubject = await db.subject.destroy({
        where: {
          id: subjectId,
        },
      });
    } catch (err) {
      console.log(err);
    }
    return delSubject
  };
  module.exports.findAllSubjects = async () => {
    try {
      var findAllSubs =  await db.subject.findAll();
    } catch(err){
      console.log(err)
    }
    return findAllSubs
  };
  module.exports.updateSubject = async (subjectDetails, id) => {
    try {
      var updatedSubject = await db.subject.update(subjectDetails, {
        where: {
          id: id,
        },
      });
    } catch(err){
      console.log(err)
    }
    return updatedSubject
  };
  