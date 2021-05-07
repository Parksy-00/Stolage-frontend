/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
  tags: {
    error: null,
    items: {},
  },
  files: {
    error: null,
    items: {},
  },
};

const matchedItemsSlice = createSlice({
  name: 'matchedItems',
  initialState,
  reducers: {
    fetchFilesSuccess: (state, action) => {
      state.files = {
        error: null,
        items: action.payload,
      };
    },
    fetchFilesFail: (state, action) => {
      state.files = {
        error: action.payload,
        items: {},
      };
    },
    fetchTagsSuccess: (state, action) => {
      state.tags = {
        error: null,
        items: action.payload,
      };
    },
    fetchTagsFail: (state, action) => {
      state.tags = {
        error: action.payload,
        items: {},
      };
    },
  },
});

const {
  fetchFilesSuccess,
  fetchFilesFail,
  fetchTagsSuccess,
  fetchTagsFail,
} = matchedItemsSlice.actions;

const fetchMatchedFiles = () => async (dispatch) => {
  try {
    const res = await Axios.post('/files');
    dispatch(fetchFilesSuccess(res.matchedFiles));
  } catch (err) {
    dispatch(fetchFilesFail(err.message));
  }
};

const fetchMatchedTags = () => async (dispatch) => {
  try {
    const res = await Axios.post('/tags');
    dispatch(fetchTagsSuccess(res.matchedTags));
  } catch (err) {
    dispatch(fetchTagsFail(err.message));
  }
};

export {
  fetchFilesSuccess,
  fetchFilesFail,
  fetchTagsSuccess,
  fetchTagsFail,
  fetchMatchedFiles,
  fetchMatchedTags,
};
export default matchedItemsSlice.reducer;
