const router = require('express').Router();
const schemas = require('../schemas');
const schemaValidator = require('../middleware/schemaValidator');
const contactHandler = require('../middleware/contactHandler');

// Home page route:
router.get('/', (req, res) => {
  res.render('home', { title: 'Home | Portfolio' });
});

// About page route:
router.get('/about', (req, res) => {
  res.render('about', { title: 'About | Portfolio' });
});

// Blog page route:
router.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog | Portfolio' });
});

// Blog post routes:
router.use('/blog-posts', require('./blog-posts'));

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Portfolio' });
});

// Contact form post request handler:
router.post(
  '/contact', 
  schemaValidator(schemas.contact), 
  contactHandler
);

// Discography page route:
router.get('/discography', (req, res) => {
  res.render('discography', { title: 'Discography | Portfolio' });
});

module.exports = router;