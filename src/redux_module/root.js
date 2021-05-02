import { combineReducers } from 'redux';
import selectedReducer from './selected/selected';
import searchBarIDReducer from './searchBarId/searchBarID';

const rootReducer = combineReducers({
    selected: selectedReducer,
    searchBarID: searchBarIDReducer
});

export default rootReducer;