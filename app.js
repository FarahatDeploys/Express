const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/videos"));
let currenttime = new Date();
const todaynumber = currenttime.getDay();
const currenthour = currenttime.getHours();
app.listen(3000);
if (todaynumber < 6 && todaynumber > 0 && currenthour > 9 && currenthour < 17) {
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.get("/ourservice", (req, res) => {
    res.render("ourservice");
  });
  app.get("/contactus", (req, res) => {
    res.render("contactus");
  });
} else {
  app.get("/", (req, res) => {
    res.render("outofservicehours");
  });
}
