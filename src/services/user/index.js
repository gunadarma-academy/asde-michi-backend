'use strict';

// Use for NeDB
// const path = require('path');
// const NeDB = require('nedb');
// const service = require('feathers-nedb');
// const hooks = require('./hooks');

// Use for MongoDB
const service = require('feathers-mongoose');
const user = require('./user-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  // Use for NeDB
  // const db = new NeDB({
  //   filename: path.join(app.get('nedb'), 'users.db'),
  //   autoload: true
  // });

  const options = {
    Model: user,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(hooks.before);

  // Set up our after hooks
  userService.after(hooks.after);

  // Create admin user that we can use to sign in quickly
  const admin = app.get('admin');
  const AdminData = {
    username: admin.username,
    email: admin.email,
    password: admin.password
  };

  console.log(AdminData);

  userService.create(AdminData, {}).then(function(user) {
    console.log('Created admin user', user);
  });

};
