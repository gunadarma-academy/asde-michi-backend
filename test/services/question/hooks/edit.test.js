'use strict';

const edit = require('../../../../src/services/question/hooks/edit.js');
const assert = require('assert');
const moment = require('moment');

describe('question edit hook', () => {
  it('type of hook returns a function', () => {
    var hook = edit();
    assert.equal(typeof hook, 'function');
  });

  it('edit title and description', () => {
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

    edit()(mockHook);

    assert.deepEqual(mockHook.data, {
      title: 'Jalan kaki di Jakarta',
      description: 'Cara jalan kaki di Jakarta yang aman gimana ya?'
    });
  });
});
