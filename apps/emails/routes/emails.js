const express = require("express");
const sendEmail = require("../controllers/sendEmail.controller");
const responseObject = require("../../../utils/response");
const router = express.Router();

// Send emails
router.post("/send", async (req, res, next) => {
  // Get to, cc, bcc
  const to = req.body.to;
  const cc = req.body.cc;
  const bcc = req.body.bcc;
  // Get subject
  const subject = req.body.subject;
  // Get content
  const content = req.body.content;
  // Send email
  try {
    await sendEmail(to, cc, bcc, subject, content);
  } catch (error) {
    return next(error);
  }
  // Send response
  res.status(200).send(responseObject(null, "Email sent successfully"));
});

module.exports = router;
