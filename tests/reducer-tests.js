import reducer from './reducer/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });
});

test('character: CHARACTERS@FIND_ALL_COMPLETE', (assert) => {
    const startingState = [];
    const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', action.data };
    const expectedState = reducer(startingState, action);

    assert.deepEqual(expectedState, )

  })
})
