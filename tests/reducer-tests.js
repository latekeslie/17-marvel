import reducer from '../app/reducer/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('character: CHARACTERS@FIND_ALL_COMPLETE', (assert) => {
    const startingState = { characters: [], comics: [], series: null, modal: null };
    const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: [{ name: 'Pad Thai', superpower: 'fluffiness' }] };
    const expectedState = { characters: [{ name: 'Pad Thai', superpower: 'fluffiness' }], comics: [], series: null, modal: null };

    assert.deepEqual(reducer(startingState, action), expectedState, 'Character data is added');
  });

  test('series: SERIES_INFO@LOAD_COMPLETE', (assert) => {
    const startingState = { characters: [], comics: [], series: null, modal: null };
    const action = { type: 'SERIES_INFO@LOAD_COMPLETE', data: 'Cats vs Dogs' };
    const expectedState = { series: 'Cats vs Dogs', comics: [], modal: null, characters: []  };

    assert.deepEqual(reducer(startingState, action), expectedState, 'Series data is added');
  });

  test('comic: COMICS@FIND_ALL_COMPLETE', (assert) => {
    const startingState = { characters: [], comics: [], series: null, modal: null };
    const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: [{ name: 'Fluffzone' }] };
    const expectedState = { comics: [{ name: 'Fluffzone' }], characters: [], series: null, modal: null };

    assert.deepEqual(reducer(startingState, action), expectedState, 'Comic data is added');
  });

  test('modal: MODAL@SET', (assert) => {
    const startingState = { characters: [], comics: [], series: null, modal: null };
    const action = { type: 'MODAL@SET', data: 'Pad Thai is a super model of the cat world' };
    const expectedState = { modal: 'Pad Thai is a super model of the cat world', comics: [], characters: [], series: null, };

    assert.deepEqual(reducer(startingState, action), expectedState, 'It fills in modal data');
  });

  test('modal: MODAL@CLEAR', (assert) => {
    const startingState = { characters: [], comics: [], series: null, modal: null };
    const action = { type: 'MODAL@CLEAR' };
    const expectedState = { characters: [], comics: [], series: null, modal: null };

    assert.deepEqual(reducer(startingState, action), expectedState, 'It sets modal to null');
  });
});
