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

const { fetchAllTagsSuccess, fetchAllTagsFail } = allTagsSlice.actions;

const fetchAllTags = () => async (dispatch) => {
  try {
    const res = await Axios.get('/tags');
    dispatch(fetchAllTagsSuccess(res.data.tags));
  } catch (err) {
    dispatch(fetchAllTagsFail(err.message));
  }
};

export { fetchAllTags, fetchAllTagsSuccess, fetchAllTagsFail };
export default allTagsSlice.reducer;
