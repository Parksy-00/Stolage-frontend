import searchBarIDReducer,
{
  addNewID,
  deleteID,
  changeCurrentID,
} from './searchBarID';

describe('module: searchBarId', () => {
  describe('reducer: setSearchBarId', () => {
    it('add new searchBarId', () => {
      const initialState = {
        current: 2,
        last: 2,
        all: [-1, 0, 2],
      };

      const state = searchBarIDReducer(initialState, addNewID());
      expect(state).toEqual({
        current: 3,
        last: 3,
        all: [-1, 0, 2, 3],
      });
    });

    it('delete existing searchBarID', () => {
      const initialState = {
        current: 1,
        last: 2,
        all: [-1, 0, 1, 2],
      };

      const state = searchBarIDReducer(initialState, deleteID(2));
      expect(state).toEqual({
        current: 0,
        last: 1,
        all: [-1, 0, 1],
      });
    });

    it('change current searchBarID', () => {
      const initialState = {
        current: 1,
        last: 2,
        all: [-1, 0, 1, 2],
      };

      const state = searchBarIDReducer(initialState, changeCurrentID(2));
      expect(state).toEqual({
        current: 2,
        last: 2,
        all: [-1, 0, 1, 2],
      });
    });
  });
});
