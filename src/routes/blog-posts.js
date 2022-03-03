const router = require('express').Router();

router.get('/looking-qt', (req, res) => {
  res.render('blog-posts/looking-qt', {
    title: 'IDE: Looking Qt! | Portfolio'
  });
});

router.get('/first-site-published', (req, res) => {
  res.render('blog-posts/first-site-published', {
    title: 'First Site Published! | Portfolio'
  });
});

router.get('/syntax-highlighter', (req, res) => {
  res.render('blog-posts/syntax-highlighter', { 
    title: 'IDE: Syntax Highlighter | Portfolio' 
  });
});

router.get('/typescript-rebuild', (req, res) => {
  res.render('blog-posts/typescript-rebuild', {
    title: 'IDE: TypeScript Rebuild | Portfolio'
  });
});

router.get('/first-repos-published', (req, res) => {
  res.render('blog-posts/first-repos-published', {
    title: 'First Repos Published! | Portfolio'
  });
});

router.get('/first-repos-published', (req, res) => {
  res.render('blog-posts/first-repos-published', {
    title: 'First Repos Published! | Portfolio'
  });
});

module.exports = router;