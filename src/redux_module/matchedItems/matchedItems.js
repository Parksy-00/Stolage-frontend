import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
  tags: {
    error: null,
    items: [],
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
    fetchFilesSuccess: (state, action) => ({
      tags: { ...state.tags },
      files: {
        error: null,
        items: action.payload,
      },
    }),
    fetchFilesFail: (state, action) => ({
      tags: { ...state.tags },
      files: {
        error: action.payload,
        items: [],
      },
    }),
    fetchTagsSuccess: (state, action) => ({
      tags: {
        error: null,
        items: action.payload,
      },
      files: { ...state.files },
    }),
    fetchTagsFail: (state, action) => ({
      tags: {
        error: action.payload,
        items: [],
      },
      files: { ...state.files },
    }),
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
