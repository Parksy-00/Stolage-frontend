import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import searchBarIDReducer from './searchBarId/searchBarID';
import selectedReducer from './selected/selected';
import allTagsReducer from './allTags/allTags';

const store = configureStore({
  reducer: {
    searchBarId: searchBarIDReducer,
    selected: selectedReducer,
    allTags: allTagsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'development',
});

export default store;
