const router = require("express").Router();
const users = require("../model/Users");
const transactions = require("../model/Transactions");
const employees = require("../model/Employees");

router.get("/", (req, res) => {
  res.render("preLogin");
});

router.get("/login", (req, res) => {
  res.render("loginForm");
});

router.post("/login", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  console.log(req.body);
  const employee = await employees.findOne({ email, password });
  if (employee) {
    // User credentials are valid
    res.redirect("/home"); // Redirect to dashboard page or any other page
  } else {
    // User credentials are invalid
    res.send(
      "<script>alert('Invalid Credentials'); window.location.href='/login'</script>"
    );
    res.render("loginForm");
  }
});

router.get("/home", (req, res) => {
  res.render("home");
});

module.exports = router;
