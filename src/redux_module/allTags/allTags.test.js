import Axios from 'axios';
import _ from 'lodash';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import allTagsReducer, { fetchAllTags, fetchAllTagsSuccess, fetchAllTagsFail } from './allTags';

jest.mock('axios');

describe('Test allTagsReducer', () => {
  const err = new Error('fail to fetch tags');

  it('Test actionCreator', () => {
    const data = [
      { id: 1, name: 'file1', tags: ['tag1'] },
      { id: 2, name: 'file2', tags: ['tag2'] },
    ];
    const onSuccess = fetchAllTagsSuccess(data);
    const onFail = fetchAllTagsFail(err.message);

    expect(onSuccess).toEqual({
      type: 'allTags/fetchAllTagsSuccess',
      payload: data,
    });

    expect(onFail).toEqual({
      type: 'allTags/fetchAllTagsFail',
      payload: err.message,
    });
  });

  describe('Test fetch function', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({});
    const tags = [
      '2016년',
      '2018년',
      '6월',
      '11월',
    ];

    it('Success', () => {
      Axios.get.mockImplementationOnce(() => Promise.resolve({
        data: { tags },
      }));

      return (
        store.dispatch(fetchAllTags())
          .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(
              {
                type: 'allTags/fetchAllTagsSuccess',
                payload: tags,
              },
            );
          })
      );
    });

    it('Fail', () => {
      Axios.get.mockImplementationOnce(() => Promise.reject(err));

      return (
        store.dispatch(fetchAllTags())
          .then(() => {
            const actions = store.getActions();
            expect(actions[1]).toEqual(
              {
                type: 'allTags/fetchAllTagsFail',
                payload: err.message,
              },
            );
          })
      );
    });
  });

  it('Test reducer', () => {
    const initialState = [];

    const tags = [
      '2016년',
      '2018년',
      '6월',
      '11월',
    ];

    const funcs = [
      fetchAllTagsSuccess,
      fetchAllTagsFail,
    ];

    const outputs = [
      {
        error: null,
        tags,
      },

      {
        error: err.message,
        tags: [],
      },
    ];

    const params = [tags, err.message];

    _.forEach(_.zip(funcs, outputs, params), _.spread((func, output, param) => {
      const state = allTagsReducer(initialState, func(param));
      expect(state).toEqual(output);
    }));
  });
});
