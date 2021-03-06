const nodemailer = require('nodemailer');
const { email: config } = require('../config');

module.exports = (req, res) => {
  const { name, email, message } = req.body;

  const emailText = 
  'Hey Rob!' +
  `\n\n${name} just sent you the following message through ` +
  `the contact form on your portfolio site:` +
  `\n\n${message}` +
  `\n\nEND OF MESSAGE` +
  `\n\nTheir email address is: ${email}` +
  `\n\nAll the best,` +
  `\n\nYour portfolio's mailbot. Bleep blop bloop!`;

  // Create email transporter:
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: true,
    auth: config.auth,
  });

  // Configure mail options:
  const mailOptions = {
    from: config.from,
    to: config.to,
    subject: `New message from ${name}`,
    text: emailText
  };

  // Send email with transporter:
  transporter.sendMail(mailOptions, error => {
    if (error) {
      const message = 'There was a problem sending your message';
      if (!req.xhr) {
        return res.render('contact', {
          error: message
        });
      }
      return res.send({ error: message });
    }

    const message = 'Message sent successfully!';

    if (!req.xhr) {
      return res.render('contact', {
        message
      });
    }

    return res.send({ message });
  });
};