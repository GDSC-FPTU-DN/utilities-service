const nodemailer = require("nodemailer");
const nodemailerTransportConfig = require("../configs/nodemailer.config");

class EmailSender {
  constructor(senderName, senderAddress) {
    this.transporter = nodemailer.createTransport(nodemailerTransportConfig);
    this.senderName = senderName;
    this.senderAddress = senderAddress;
  }

  async to(to, cc, bcc, subject, content, attachments = []) {
    const emailOptions = {
      from: `${this.senderName} <${this.senderAddress}>`,
      to: to,
      cc: cc,
      bcc: bcc,
      subject,
      text: content,
      html: content,
      attachments,
    };

    await this.transporter.sendMail(emailOptions);
  }
}

module.exports = EmailSender;
