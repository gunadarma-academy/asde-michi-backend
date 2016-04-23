// question/hooks/init.js

'use strict';

const assert = require('assert');
const init = require('../../../../src/services/question/hooks/init.js');

describe('question init hook', () => {
  it('returns a function', () => {
    var hook = init();
    assert.equal(typeof hook, 'function');
  });

  it('filters data as expected', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {
        user: {
          _id: '123'
        }
      },
      result: {},
      data: {
        title: 'Jalan kaki di Jakarta',
        description: 'Cara jalan kaki di Jakarta yang aman gimana ya?'
      }
    };

    init()(mockHook);

    assert.deepEqual(mockHook.data, {
      author: '123',
      title: 'Jalan kaki di Jakarta',
      description: 'Cara jalan kaki di Jakarta yang aman gimana ya?',
      created_at: new Date().getTime()
    });
  });
});
