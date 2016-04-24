'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const globalHooks = require('../../../hooks');
const edit = require('./edit');
const restrictToAuthor = require('./restrict-to-author');
const setAuthor = require('./set-author');

const populateAuthor = hooks.populate('sent_by', {
  service: 'users',
  field: 'author'
});

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    setAuthor()
  ],
  update: [
    hooks.remove('sent_by'),
    restrictToAuthor(),
    edit(),
  ],
  patch: [
    hooks.remove('sent_by'),
    restrictToAuthor(),
    edit()
  ],
  remove: [
    restrictToAuthor()
  ],
  addToCollection: [setAuthor]
};

exports.after = {
  all: [],
  find: [
    populateAuthor
  ],
  get: [
    populateAuthor
  ],
  create: [
    populateAuthor
  ],
  update: [
    globalHooks.addUpdatedAt()
  ],
  patch: [
    globalHooks.addUpdatedAt()
  ],
  remove: []
};
