/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  current: 0,
  last: 0,
  all: [-1, 0],
};

const searchBarIDSlice = createSlice({
  name: 'searchBarID',
  initialState,
  reducers: {
    addNewID: (state, action) => {
      const newID = state.last + 1;
      state.current = newID;
      state.last = newID;
      state.all.push(newID);
    },
    deleteID: (state, action) => {
      const newLast = (state.last === action.payload)
        ? _.nth(state.all, -2)
        : state.last;

      state.current = 0;
      state.last = newLast;
      state.all = _.without(state.all, action.payload);
    },
    changeCurrentID: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { addNewID, deleteID, changeCurrentID } = searchBarIDSlice.actions;
export default searchBarIDSlice.reducer;
