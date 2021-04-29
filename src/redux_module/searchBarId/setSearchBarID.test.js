import setSearchBarID, {addNewId, deleteID, changeCurrentId} from './setSearchBarID'

describe('module: searchBarId', () => {
    describe('reducer: setSearchBarId', () => {
        it('add new searchBarId', () => {

            const initialState = {
                searchBarID: {
                    current: 2,
                    last: 2,
                    all: [-1, 0, 2]
                }
            };

            const state = setSearchBarID(initialState, addNewId())
            expect(state).toEqual({
                searchBarID: {
                    current: 3,
                    last: 3,
                    all: [-1, 0, 2, 3]
                }
            })
        })
    })
})