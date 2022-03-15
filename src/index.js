if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const path = require('path');
const express = require('express');
const routes = require('./routes');

// Init app:
const app = express();
const port = process.env.PORT || 3000;

// Body parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enforce HTTPS:
app.enable('trust proxy');
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'development' && !req.secure) {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Load routes:
app.use('/', routes);

// Config static asset dir:
app.use(express.static(path.resolve(__dirname, 'public')));

// 404 route:
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', '404.html'));
});

// Start app:
app.listen(port, error => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
  } else {
    console.log(`Server listening on port ${port}`)
  }
});