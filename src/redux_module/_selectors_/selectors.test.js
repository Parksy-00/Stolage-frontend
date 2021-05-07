import { getFileList } from './selectors';

describe('Test Selector', () => {
  it('getFileList', () => {
    const state = {
      matchedItems: {
        tags: {
          error: null,
          items: [],
        },
        files: {
          error: null,
          items: {
            0: {
              1: { id: 1, name: '20180620', tags: ['2018년', '6월', '20번'] },
              2: { id: 2, name: '20180321', tags: ['2018년', '3월', '21번', '킬러'] },
            },
            1: {
              1: { id: 1, name: '20180620', tags: ['2018년', '6월', '20번'] },
              3: { id: 3, name: '20181130', tags: ['2018년', '11월', '30번', '킬러'] },
            },
          },
        },
      },
    };
    const files = getFileList(state);

    expect(files).toEqual({
      1: { id: 1, name: '20180620', tags: ['2018년', '6월', '20번'] },
      2: { id: 2, name: '20180321', tags: ['2018년', '3월', '21번', '킬러'] },
      3: { id: 3, name: '20181130', tags: ['2018년', '11월', '30번', '킬러'] },
    });
  });
});
