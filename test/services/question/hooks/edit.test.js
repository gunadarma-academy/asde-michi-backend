// question/hooks/edit.js

'use strict';

const assert = require('assert');
const edit = require('../../../../src/services/question/hooks/edit.js');

describe('question edit hook', () => {
  it('returns a function', () => {
    var hook = edit();
    assert.equal(typeof hook, 'function');
  });

  it('filters data as expected', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {
        title: 'Jalan kaki di Jakarta',
        description: 'Cara jalan kaki di Jakarta yang aman gimana ya?'
      }
    };

    edit()(mockHook);

    assert.deepEqual(mockHook.data, {
      title: 'Jalan kaki di Jakarta',
      description: 'Cara jalan kaki di Jakarta yang aman gimana ya?',
      updated_at: new Date().getTime()
    });
  });
});
