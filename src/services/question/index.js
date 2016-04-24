'use strict';

// Use for NeDB
// const path = require('path');
// const NeDB = require('nedb');
// const service = require('feathers-nedb');
// const hooks = require('./hooks');

// Use for MongoDB
const service = require('feathers-mongoose');
const question = require('./question-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  // Use for NeDB
  // const db = new NeDB({
  //   filename: path.join(app.get('nedb'), 'questions.db'),
  //   autoload: true
  // });

  const options = {
    Model: question,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/questions', service(options));

  // Get our initialize service to that we can bind hooks
  const questionService = app.service('/questions');

  // Set up our before hooks
  questionService.before(hooks.before);

  // Set up our after hooks
  questionService.after(hooks.after);

  // // Create the first question by admin
  // const AdminQuestion = {
  //   author: '',
  //   title: '',
  //   description: '',
  // };
  //
  // console.log(AdminData);
  //
  // userService.create(AdminData, {}).then(function(user) {
  //   console.log('Created admin user', user);
  // });
};
