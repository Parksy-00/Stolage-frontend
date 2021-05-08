import Axios from 'axios';
import _ from 'lodash';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import matchedItemsReducer, {
  fetchFilesSuccess,
  fetchFilesFail,
  fetchTagsSuccess,
  fetchTagsFail,
  fetchMatchedFiles,
  fetchMatchedTags,
} from './matchedItems';
import { files, tags } from './matchedItems.fixture';

jest.mock('axios');

describe('module: matchedItems', () => {
  describe('Test matchedItemsSlice', () => {
    describe('Test actionCreator', () => {
      it('fetchFilesAction', () => {
        const error = new Error('Fail to fetch files');

        const onSuccess = fetchFilesSuccess(files);
        const onFail = fetchFilesFail(error.message);

        expect(onSuccess).toEqual({
          type: 'matchedItems/fetchFilesSuccess',
          payload: files,
        });
        expect(onFail).toEqual({
          type: 'matchedItems/fetchFilesFail',
          payload: error.message,
        });
      });

      it('fetchTagsAction', () => {
        const error = new Error('Fail to fetch tags');

        const onSuccess = fetchTagsSuccess(tags);
        const onFail = fetchTagsFail(error.message);

        expect(onSuccess).toEqual({
          type: 'matchedItems/fetchTagsSuccess',
          payload: tags,
        });
        expect(onFail).toEqual({
          type: 'matchedItems/fetchTagsFail',
          payload: error.message,
        });
      });
    });

    describe('Test Reducer', () => {
      it('when fetch files', () => {
        const initialState = {
          tags: {
            error: null,
            items: {},
          },
          files: {
            error: null,
            items: {},
          },
        };

        const error = new Error('Fail to fetch tags');

        const actionCreators = [
          fetchFilesSuccess,
          fetchFilesFail,
        ];

        const exps = [
          {
            tags: {
              error: null,
              items: {},
            },
            files: {
              error: null,
              items: files,
            },
          },
          {
            tags: {
              error: null,
              items: {},
            },
            files: {
              error: error.message,
              items: {},
            },
          },
        ];

        const args = [
          files,
          error.message,
        ];

        _.forEach(_.zip(actionCreators, exps, args), _.spread((actionCreator, exp, arg) => {
          const state = matchedItemsReducer(initialState, actionCreator(arg));
          expect(state).toEqual(exp);
        }));
      });

      it('when fetch tags', () => {
        const initialState = {
          tags: {
            error: null,
            items: {},
          },
          files: {
            error: null,
            items: {},
          },
        };

        const error = new Error('Fail to fetch tags');

        const actionCreators = [
          fetchTagsSuccess,
          fetchTagsFail,
        ];

        const exps = [
          {
            tags: {
              error: null,
              items: tags,
            },
            files: {
              error: null,
              items: {},
            },
          },
          {
            tags: {
              error: error.message,
              items: {},
            },
            files: {
              error: null,
              items: {},
            },
          },
        ];

        const args = [
          tags,
          error.message,
        ];

        _.forEach(_.zip(actionCreators, exps, args), _.spread((actionCreator, exp, arg) => {
          const state = matchedItemsReducer(initialState, actionCreator(arg));
          expect(state).toEqual(exp);
        }));
      });
    });
  });

  describe('Test fetchFunction', () => {
    const mockStore = configureStore([thunk]);

    const initialState = {
      tags: {
        error: null,
        items: [],
      },
      files: {
        error: null,
        items: [],
      },
    };

    describe('fetchMatchedFiles', () => {
      const fetchFilesError = new Error('Fail to fetch files');

      it('when success', () => {
        const store = mockStore(initialState);

        Axios.post.mockImplementationOnce(() => Promise.resolve({
          matchedFiles: files,
        }));

        return (
          store.dispatch(fetchMatchedFiles(['2018년']))
            .then(() => {
              const actions = store.getActions();
              expect(actions[0]).toEqual(fetchFilesSuccess(files));
            })
        );
      });

      it('when fail', () => {
        const store = mockStore(initialState);

        Axios.post.mockImplementationOnce(() => Promise.reject(fetchFilesError));

        return (
          store.dispatch(fetchMatchedFiles(['2018년']))
            .then(() => {
              const actions = store.getActions();
              expect(actions[0]).toEqual(fetchFilesFail(fetchFilesError.message));
            })
        );
      });
    });

    describe('fetchMatchedTags', () => {
      const fetchTagsError = new Error('Fail to fetch tags');

      it('when success', () => {
        const store = mockStore(initialState);

        Axios.post.mockImplementationOnce(() => Promise.resolve({
          matchedTags: tags,
        }));

        return (
          store.dispatch(fetchMatchedTags(['짝수']))
            .then(() => {
              const actions = store.getActions();
              expect(actions[0]).toEqual(fetchTagsSuccess(tags));
            })
        );
      });

      it('when fail', () => {
        const store = mockStore(initialState);

        Axios.post.mockImplementationOnce(() => Promise.reject(fetchTagsError));

        return (
          store.dispatch(fetchMatchedTags(['짝수']))
            .then(() => {
              const actions = store.getActions();
              expect(actions[0]).toEqual(fetchTagsFail(fetchTagsError.message));
            })
        );
      });
    });
  });
});
