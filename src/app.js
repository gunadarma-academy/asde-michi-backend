'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

// Configure the express
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

// Run the frontend with express
// const server = app.listen(8080, '127.0.0.1', function () {
//   const host = server.address().address;
//   var port = server.address().port;
//   console.log(`Arlin frontend app running at http://${host}:${port}`);
// });

module.exports = app;
