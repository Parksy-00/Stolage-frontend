import searchBarIDReducer, {addNewId, deleteID, changeCurrentId} from './searchBarID'

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

            const state = searchBarIDReducer(initialState, addNewId())
            expect(state).toEqual({
                searchBarID: {
                    current: 3,
                    last: 3,
                    all: [-1, 0, 2, 3]
                }
            })
        });

        it('delete existing searchBarID', () => {
            const initialState = {
                searchBarID: {
                    current: 1,
                    last: 2,
                    all: [-1, 0, 1, 2]
                }
            };


            const state = searchBarIDReducer(initialState, deleteID(2));
            expect(state).toEqual({
                searchBarID: {
                    current: 0,
                    last: 1,
                    all: [-1, 0, 1]
                }
            });
        });

        it('change current searchBarID', () => {
            const initialState = {
                searchBarID: {
                    current: 1,
                    last: 2,
                    all: [-1, 0, 1, 2]
                }
            };


            const state = searchBarIDReducer(initialState, changeCurrentId(2));
            expect(state).toEqual({
                searchBarID: {
                    current: 2,
                    last: 2,
                    all: [-1, 0, 1, 2]
                }
            });
        })
    });
});