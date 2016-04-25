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
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware)
  .use(function (req, res, next) {
    // Inject the current user into feathers params
    req.feathers.user = req.session.user;
    next();
  });

const port = app.get('port');
const host = app.get('host');
const server = app.listen(port, host);

server.on('listening', () =>
  console.log(`Arlin backend app running at http://${host}:${port}`)
);

module.exports = app;
