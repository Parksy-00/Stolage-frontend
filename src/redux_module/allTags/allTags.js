import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
  error: null,
  tags: [],
};

const allTagsSlice = createSlice({
  name: 'allTags',
  initialState,
  reducers: {
    fetchAllTagsSuccess: (state, action) => ({
      error: null,
      tags: action.payload,
    }),
    fetchAllTagsFail: (state, action) => ({
      error: action.payload,
      tags: [],
    }),
  },
});

export const fetchAllTags = () => async (dispatch) => {
  Axios.get('/tags')
    .then(
      (res) => dispatch(fetchAllTagsSuccess(res.data.tags)),
      (err) => dispatch(fetchAllTagsFail(err.message)),
    );
};

export const { fetchAllTagsSuccess, fetchAllTagsFail } = allTagsSlice.actions;

export default allTagsSlice.reducer;
