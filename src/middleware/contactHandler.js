const nodemailer = require('nodemailer');
const { email: config } = require('../config');

module.exports = (req, res) => {
  const { name, email, message } = req.body;

  const emailText = 
  'Hey Ven!' +
  `\n\n${name} just sent you the following message through ` +
  `the contact form on ventrebor.com:` +
  `\n\n${message}` +
  `\n\nEND OF MESSAGE` +
  `\n\nTheir email address is: ${email}` +
  `\n\nAll the best,` +
  `\n\nThe ventrebor.com server`;

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: true,
    auth: config.auth,
  });

  const mailOptions = {
    from: config.from,
    to: config.to,
    subject: `New message from ${name}`,
    text: emailText
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      const message = 'There was a problem sending your message';
      return res.send({ error: message });
    }

    const message = 'Message sent successfully!';

    return res.send({ message });
  });
};