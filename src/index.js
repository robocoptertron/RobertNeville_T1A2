const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const routes = require('./routes');

// Init app:
const app = express();
const port = process.env.PORT || 3000;

// Init view engine:
app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.resolve(__dirname, 'views'));

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
  res.render('404', { title: '404 | Portfolio' });
});

// Start app:
app.listen(port, error => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
  } else {
    console.log(`Server listening on port ${port}`)
  }
});