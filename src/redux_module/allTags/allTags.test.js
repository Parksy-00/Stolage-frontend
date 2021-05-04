import allTagsReducer, { fetchAllTags, fetchAllTagsSuccess, fetchAllTagsFail } from './allTags';

import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from '../store';

let mock = new MockAdapter(Axios);

describe('Test allTagsReducer', () => {
    const err = new Error('fail to fetch tags')

    it('Test actionCreator', () => {
        const success = fetchAllTagsSuccess([{id: 1, name: 'file1', tags: ['tag1']}]);
        const fail = fetchAllTagsFail(err.message);

        expect(success.type).toBe('allTags/fetchAllTagsSuccess');
        expect(success.payload).toEqual([{id: 1, name: 'file1', tags: ['tag1']}]);

        expect(fail.type).toBe('allTags/fetchAllTagsFail');
        expect(fail.payload).toBe('fail to fetch tags');
    })

    it('Test reducer', () => {

        const initialState = [];

        const tags = [
            '2016년',
            '2018년',
            '6월',
            '11월',
        ]

        let state = allTagsReducer(initialState, fetchAllTagsSuccess(tags));
        expect(state.error).toBeNull();
        expect(state.tags).toEqual(tags);

        state = allTagsReducer(initialState, fetchAllTagsFail(err.message));
        expect(state.error).toBe('fail to fetch tags');
        expect(state.tags).toHaveLength(0);

    })

    describe('Test fetch function', () => {
        const tags = [
            '2016년',
            '2018년',
            '6월',
            '11월',
        ];

        it('Success', () => {
            mock.onGet('/tags').reply(200, {
            tags,
            })

            store.dispatch(fetchAllTags())
            .then(() => {
                expect(state.tags).toEqual(tags);
                expect(state.err).toBeNull();
            })
            .catch(() => {})
        })

        it('Fail', () => {
            mock.onGet('/tags').reply(404, {});

            store.dispatch(fetchAllTags())
            .then(() => {
                expect(state.tags).toHaveLength(0);
                expect(state.err).not.toBeNull();
            })
            .catch(() => {})
        })

        
    })
})
