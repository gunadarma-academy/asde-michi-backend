'use strict';

// question-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  meta: {
    answer_count: Number,
    answered: Boolean,
    score: Number,
    tags: Array,
    labels: Array,
    visible: Boolean,
    url: String
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

const questionModel = mongoose.model('question', questionSchema);

module.exports = questionModel;
