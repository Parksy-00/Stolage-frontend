/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: {
    '-1': [],
    0: [],
  },
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    updateSelected: (state, action) => {
      const ID = action.payload.id;
      state[ID] = action.payload.newSelected;
    },
  },
});

export const { updateSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
