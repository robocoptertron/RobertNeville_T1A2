const path = require('path');
const router = require('express').Router();
const schemas = require('../schemas');
const schemaValidator = require('../middleware/schemaValidator');
const contactHandler = require('../middleware/contactHandler');

// Home page route:
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

// About page route:
router.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'about.html'));
});

// Blog page route:
router.get('/blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'blog.html'));
});

// Blog post routes:
router.use('/blog-posts', require('./blog-posts'));

router.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'contact.html'));
});

// Contact form post request handler:
router.post(
  '/contact', 
  schemaValidator(schemas.contact), 
  contactHandler
);

// Discography page route:
router.get('/discography', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'discography.html'));
});

module.exports = router;