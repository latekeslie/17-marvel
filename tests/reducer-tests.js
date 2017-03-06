import reducer from '../app/reducer/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('character: CHARACTERS@FIND_ALL_COMPLETE', (assert) => {
    const startingState = {};
    const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: { name: 'Pad Thai', superpower: 'fluffiness' } };
    const expectedState = { name: 'Pad Thai', superpower: 'fluffiness' };

    assert.deepEqual(reducer(startingState, action).characters, expectedState, 'Character data is added');
  });

  test('series: SERIES_INFO@LOAD_COMPLETE', (assert) => {
    const startingState = {};
    const action = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { series: 'Cats vs Dogs', issue: '17' } };
    const expectedState = { series: 'Cats vs Dogs', issue: '17' };

    assert.deepEqual(reducer(startingState, action).series, expectedState, 'Series data is added');
  });

  test('comic: COMICS@FIND_ALL_COMPLETE', (assert) => {
    const startingState = {};
    const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: { name: 'Fluffzone' } };
    const expectedState = { name: 'Fluffzone' };

    assert.deepEqual(reducer(startingState, action).comics, expectedState, 'Comic data is added');
  });

  test('modal: MODAL@SET', (assert) => {
    const startingState = [];
    const action = { type: 'MODAL@SET', data: 'Pad Thai is a super model of the cat world' };
    const expectedState = { data: 'Pad Thai is a super model of the cat world' };

    assert.deepEqual(reducer(startingState, action).modal, expectedState, 'It fills in modal data');
  });

  test('modal: MODAL@CLEAR', (assert) => {
    const startingState = { data: 'Pad Thai is a super model of the cat world' };
    const action = { type: 'MODAL@CLEAR' };
    const expectedState = null;

    assert.deepEqual(reducer(startingState, action).modal, expectedState, null);
  });
});
