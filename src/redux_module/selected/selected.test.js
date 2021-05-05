import selectedReducer, { updateSelected } from './selected';

describe('module: selected', () => {
  it('reducer: setSelected', () => {
    const initialState = {
      0: ['abc'],
      1: ['def'],
    };

    const state = selectedReducer(
      initialState,
      updateSelected(
        {
          id: 0,
          newSelected: ['this', 'that'],
        },
      ),
    );

    expect(state).toEqual({
      0: ['this', 'that'],
      1: ['def'],
    });
  });
});
