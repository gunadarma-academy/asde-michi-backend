'use strict';

// answer-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  meta: {
    url: String,
    score: Number
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

const answerModel = mongoose.model('question', answerSchema);

module.exports = answerModel;
