'use strict';

const setAuthor = require('../../../../src/services/question/hooks/set-author.js');
const assert = require('assert');

describe('question setAuthor hook', function() {
  it('type of hook returns a function', () => {
    var hook = setAuthor();
    assert.equal(typeof hook, 'function');
  });

  // it('hook can be used', function() {
  //   const mockHook = {
  //     type: 'before',
  //     app: {},
  //     params: {},
  //     result: {},
  //     data: {}
  //   };
  //
  //   setAuthor()(mockHook);
  //
  //   assert.ok(mockHook.setAuthor);
  // });
});
