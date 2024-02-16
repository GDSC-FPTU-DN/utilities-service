const EmailSender = require("../services/nodemailer.service");
const {
  EMAILS_SENDER_NAME,
  EMAILS_DEFAULT_SUBJECT,
  EMAILS_DEFAULT_CONTENT,
} = require("../utils/constants");
require("dotenv").config();

async function sendEmail(to, cc, bcc, title, content) {
  if (!to && !cc && !bcc) {
    return;
  }
  if (!title) {
    title = EMAILS_DEFAULT_SUBJECT;
  }
  if (!content) {
    content = EMAILS_DEFAULT_CONTENT;
  }
  const sender = new EmailSender(EMAILS_SENDER_NAME, process.env.EMAIL);
  await sender.to(to, cc, bcc, title, content);
}

module.exports = sendEmail;
