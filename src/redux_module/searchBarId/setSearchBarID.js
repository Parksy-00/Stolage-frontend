export const addNewId = () => ({type: 'addNewId'});
export const deleteID = (id) => (
    {
        type: 'deleteID',
        payload: {
            id
        }
    }
);
export const changeCurrentId = (id) => (
    {
        type: 'changeCurrentId',
        payload: {
            id
        }
    }
);


const initialState = {
    searchBarID: {
        current: 0,
        last: 0,
        all: [-1, 0]
    }
};

export default function setSearchBarID(state=initialState, action) {
    switch(action.type){
        case('addNewId'):
            const newID = state.searchBarID.last + 1;
            return {
                searchBarID: {
                    ...state.searchBarID,
                    current: newID,
                    last: newID,
                    all: [...state.searchBarID.all, newID]
                }
            }

        default:
            return {};
    };
};