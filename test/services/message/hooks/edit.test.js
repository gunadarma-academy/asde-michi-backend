// message/hooks/edit.js

'use strict';

const assert = require('assert');
const edit = require('../../../../src/services/message/hooks/edit.js');

describe('message edit hook', () => {
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
        text: 'arlin&'
      }
    };

    edit()(mockHook);

    assert.deepEqual(mockHook.data, {
      text: 'arlin&amp;',
      updated_at: new Date().getTime()
    });
  });
});
