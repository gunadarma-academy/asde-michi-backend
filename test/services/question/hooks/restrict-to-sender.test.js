'use strict';

const assert = require('assert');
const restrictToAuthor = require('../../../../src/services/question/hooks/restrict-to-author.js');

describe('question restrict-to-author hook', () => {
  it('returns a function', () => {
    var hook = restrictToAuthor();
    assert.equal(typeof hook, 'function');
  });
});
