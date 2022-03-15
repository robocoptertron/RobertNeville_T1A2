const path = require('path');
const router = require('express').Router();

router.get('/looking-qt', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'blog-posts', 'looking-qt.html'));
});

router.get('/first-site-published', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..','public', 'blog-posts', 'first-site-published.html'));
});

router.get('/syntax-highlighter', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'blog-posts', 'syntax-highlighter.html'));
});

router.get('/typescript-rebuild', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'blog-posts', 'typescript-rebuild.html'));
});

router.get('/first-repos-published', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'blog-posts', 'first-repos-published.html'));
});

module.exports = router;