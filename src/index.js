'use strict';

// PUBLIC FRONTEND
// Will be deprecated

const path = require('path');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

// Configure the express
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
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
  console.log(`Arlin frontend app running at http://${host}:${port}`);
});
