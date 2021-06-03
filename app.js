let express = require("express");
let app = express();
// const db = require("./dbHelper/connection");
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: "20mb"}));
app.use("/student", require("./module/routes/user.routes"));
app.use("/subjects", require("./module/routes/subject.routes"));
app.get("*", (req, res) => {
  res.send("<h2> Welcome to test Server</h2>");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listening at " + port);
    console.log(err);
    return;
  }
  console.log("Server Started Successfully..!");
  // db.connection
});
