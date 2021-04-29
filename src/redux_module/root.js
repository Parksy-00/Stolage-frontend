import { combineReducers } from 'redux';
import setSelected from './selected/setSelected';
import setSearchBarID from './searchBarId/setSearchBarID';

const rootReducer = combineReducers({
    setSelected,
    setSearchBarID
});

export default rootReducer;