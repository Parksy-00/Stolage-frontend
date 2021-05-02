export const updateSelected = (id, newSelected) => (
    {
        type: 'updateSelected',
        payload: {
            id,
            newSelected
        }
    }
);

const initialState = {
    selected: {
        '-1': [],
        '0': []
    }
};

export default function selectedReducer(state=initialState, action) {
    switch(action.type){
        case('updateSelected'):
            return {
                selected: {
                    ...state.selected,
                    [action.payload.id]: action.payload.newSelected
                }
            };
        default:
            return {};
    };
};