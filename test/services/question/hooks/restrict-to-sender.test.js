'use strict';

const assert = require('assert');
const restrictToSender = require('../../../../src/services/question/hooks/restrict-to-sender.js');

describe('question restrict-to-sender hook', () => {
  it('returns a function', () => {
    var hook = restrictToSender();
    assert.equal(typeof hook, 'function');
  });
});
