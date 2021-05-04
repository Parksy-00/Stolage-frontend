import _ from 'lodash';

export const addNewId = () => ({ type: 'addNewId' });
export const deleteID = (id) => (
  {
    type: 'deleteID',
    payload: {
      id,
    },
  }
);
export const changeCurrentId = (id) => (
  {
    type: 'changeCurrentId',
    payload: {
      id,
    },
  }
);

// -1은 Group SearchBar, 0부터는 Tag SearchBar
const initialState = {
  searchBarID: {
    current: 0,
    last: 0,
    all: [-1, 0],
  },
};

export default function searchBarIDReducer(state = initialState, action) {
  switch (action.type) {
  case ('addNewId'):
    const newID = state.searchBarID.last + 1;
    return {
      searchBarID: {
        ...state.searchBarID,
        current: newID,
        last: newID,
        all: [...state.searchBarID.all, newID],
      },
    };

  case ('deleteID'):
    const newLast = (state.searchBarID.last === action.payload.id)
      ? _.nth(state.searchBarID.all, -2)
      : state.searchBarID.last;
    return {
      searchBarID: {
        ...state.searchBarID,
        current: 0,
        last: newLast,
        all: _.without(state.searchBarID.all, action.payload.id),
      },
    };

  case ('changeCurrentId'):
    return {
      searchBarID: {
        ...state.searchBarID,
        current: action.payload.id,
      },
    };

  default:
    return {};
  }
}
