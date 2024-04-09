const express = require("express");
const bodyParser = require("body-parser");
const database = require("./db");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require("./router/router"));
app.set("view engine", "ejs");

database();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${PORT} ...`);
  }
});
