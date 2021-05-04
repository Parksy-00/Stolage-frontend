import Axios from 'axios';
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
    const data = [1, 2];

    it('Success', () => {
      Axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          tags: data,
        },
      }));

      return (
        store.dispatch(fetchAllTags())
          .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(
              {
                type: 'allTags/fetchAllTagsSuccess',
                payload: data,
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

  // it('Test reducer', () => {
  //   const initialState = [];

  //   const tags = [
  //     '2016년',
  //     '2018년',
  //     '6월',
  //     '11월',
  //   ];

  //   let state = allTagsReducer(initialState, fetchAllTagsSuccess(tags));
  //   expect(state.error).toBeNull();
  //   expect(state.tags).toEqual(tags);

  //   state = allTagsReducer(initialState, fetchAllTagsFail(err.message));
  //   expect(state.error).toBe('fail to fetch tags');
  //   expect(state.tags).toHaveLength(0);
  // });

  // describe('Test fetch function', () => {
  //   const tags = [
  //     '2016년',
  //     '2018년',
  //     '6월',
  //     '11월',
  //   ];

  //   it('Success', () => {
  //     mock.onGet('/tags').reply(200, {
  //       tags,
  //     });

  //     store.dispatch(fetchAllTags())
  //       .then(() => {
  //         expect(state.tags).toEqual(tags);
  //         expect(state.err).toBeNull();
  //       })
  //       .catch(() => {});
  //   });

  //   it('Fail', () => {
  //     mock.onGet('/tags').reply(404, {});

  //     store.dispatch(fetchAllTags())
  //       .then(() => {
  //         expect(state.tags).toHaveLength(0);
  //         expect(state.err).not.toBeNull();
  //       })
  //       .catch(() => {});
  //   });
  // });
});
