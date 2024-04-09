const mongoose = require("mongoose");
DB_URI = "mongodb://localhost:27017/BankWebsiteDB";

const connectToDB = () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
