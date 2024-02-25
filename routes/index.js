var express = require("express");
var router = express.Router();
var Contact = require("../models/contact");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "" });
});

router.post("/contact", async (req, res, next) => {
  const formData = req.body;

  // console.log(formData);
  if (formData) {
    let contact = new Contact();
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.address = req.body.address;
    contact.desc = req.body.desc;
    const contactDoc = await contact.save();
    // console.log(contactDoc);
    if (contactDoc) {
      res.redirect("/success");
    } else {
      res.redirect("/error");
    }
  } else {
    res.redirect("/error");
  }
});

router.get("/success", function (req, res, next) {
  res.render("success");
});
router.get("/error", function (req, res, next) {
  res.render("error");
});

router.get("/contact", (req, res, next) => {
  res.status(200).render("contact");
});

module.exports = router;
