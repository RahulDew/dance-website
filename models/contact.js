const mongoose = require("mongoose");

// Defining Mongoose scema
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
