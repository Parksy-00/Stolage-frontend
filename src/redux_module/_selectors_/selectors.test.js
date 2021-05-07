import { getFileList, getTagList } from './selectors';

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
    const fileList = getFileList(state);

    expect(fileList).toEqual({
      1: { id: 1, name: '20180620', tags: ['2018년', '6월', '20번'] },
      2: { id: 2, name: '20180321', tags: ['2018년', '3월', '21번', '킬러'] },
      3: { id: 3, name: '20181130', tags: ['2018년', '11월', '30번', '킬러'] },
    });
  });

  it('getTagList', () => {
    const state = {
      matchedItems: {
        tags: {
          error: null,
          items: {
            1: { id: 1, name: '6월', group: ['짝수', '평가원', '달'] },
            2: { id: 2, name: '2016년', group: ['년', '짝수'] },
            3: { id: 3, name: '21번', group: ['번호', '홀수'] },
          },
        },
        files: {
          error: null,
          items: {},
        },
      },
    };

    const tagList = getTagList(state);

    expect(tagList).toEqual({
      1: { id: 1, name: '6월', group: ['짝수', '평가원', '달'] },
      2: { id: 2, name: '2016년', group: ['년', '짝수'] },
      3: { id: 3, name: '21번', group: ['번호', '홀수'] },
    });
  });
});
