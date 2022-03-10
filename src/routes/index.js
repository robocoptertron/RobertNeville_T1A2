const router = require('express').Router();
const schemas = require('../schemas');
const schemaValidator = require('../middleware/schemaValidator');
const contactHandler = require('../middleware/contactHandler');

router.get('/', (req, res) => {
  res.render('home', { title: 'Home | Portfolio' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About | Portfolio' });
});

router.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog | Portfolio' });
});

router.use('/blog-posts', require('./blog-posts'));

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Portfolio' });
});

router.post(
  '/contact', 
  schemaValidator(schemas.contact), 
  contactHandler
);

router.get('/discography', (req, res) => {
  res.render('discography', { title: 'Discography | Portfolio' });
});

module.exports = router;