import selectedReducer, {updateSelected} from './selected'

describe('module: selected', () => {
    it('action : updateSelected', () => {
        const exp = {
            type: 'updateSelected',
            payload: {
                id: 2,
                newSelected: ['this', 'that']
            }
        };

        expect(updateSelected(2, ['this', 'that'])).toEqual(exp);
    });

    it('reducer: setSelected', () => {
        
        const initialState = {
            selected: {
                '0': ['abc'],
                '1': ['def']
            }
        };

        const state = selectedReducer(initialState, updateSelected(0, ['this', 'that']));
        expect(state.selected).toEqual({
            '0': ['this', 'that'],
            '1': ['def']
        });
    });
});
