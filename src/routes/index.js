const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home | Portfolio'});
});

router.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog | Portfolio'});
});

module.exports = router;