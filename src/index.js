'use strict';

const path = require('path');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const winston = require('winston');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));
const PUBLIC = path.join(path.join(__dirname, '../public/'));
winston.info('PUBLIC PATH:', PUBLIC);

// Configure the express
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(PUBLIC, 'favicon.ico')))
  .get('/signup', function (req, res) {
    res.sendFile(PUBLIC  + 'signup.html');
  })
  .get('/signin', function (req, res) {
    res.sendFile(PUBLIC + 'signin.html');
  })
  .get('/home', function (req, res) {
    res.sendFile(PUBLIC + 'home.html');
  })
  .use('/', serveStatic(app.get('public')));


const HOST = '127.0.0.1';
const PORT = 8080;

const server = app.listen(PORT, HOST, err => {
  if (err) {
    console.log(err);
    return;
  }
  const host = server.address().address;
  var port = server.address().port;
  winston.info('Express server Started');
  winston.info(`Arlin frontend app running at http://${host}:${port}`);
});

module.exports = app;
