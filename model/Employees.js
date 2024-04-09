const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const employees = new mongoose.model("employees", EmployeeSchema);

// RUN THIS FOR THE FIRST TIME

// const employee = new employees({
//   name: "Harshwardhan",
//   password: "Harshwardhan@2024",
//   email: "harshwardhan@gmail.com",
//   contact: "9123120923",
// });
// employee.save().then(console.log("Employee added sucessfully !!"));

module.exports = employees;
