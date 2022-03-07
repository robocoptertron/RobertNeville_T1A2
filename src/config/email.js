module.exports = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS
  },
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO
};