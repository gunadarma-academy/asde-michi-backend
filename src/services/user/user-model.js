'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  meta: {
    twitter: {
      _id: String,
      username: String
    }
  },
  created_at: {
    type: Date,
    'default': moment().valueOf()
  },
  updated_at: {
    type: Date,
    'default': moment().valueOf()
  }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
