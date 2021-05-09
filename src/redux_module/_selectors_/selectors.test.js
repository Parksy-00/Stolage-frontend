import { getFileList, getTagList, getRelatedTags } from './selectors';
import matchedItems from '../matchedItems/matchedItems.fixture';

describe('Test Selector', () => {
  it('getFileList', () => {
    const state = { matchedItems };
    const fileList = getFileList(state);

    expect(fileList).toEqual({
      1: {
        id: 1,
        name: '20180620',
        tags: {
          1: { id: 1, name: '2018년', group: ['짝수', '년'] },
          2: { id: 2, name: '6월', group: ['짝수', '월', '평가원'] },
          3: { id: 3, name: '20번', group: ['짝수', '번호'] },
        },
      },
      2: {
        id: 2,
        name: '20200321',
        tags: {
          4: { id: 4, name: '2020년', group: ['짝수', '년'] },
          5: { id: 5, name: '3월', group: ['홀수', '월', '교육청'] },
          6: { id: 6, name: '21번', group: ['홀수', '번호'] },
        },
      },
      3: {
        id: 3,
        name: '20181130',
        tags: {
          1: { id: 1, name: '2018년', group: ['짝수', '년'] },
          7: { id: 7, name: '11월', group: ['홀수', '월', '평가원', '수능'] },
          8: { id: 8, name: '30번', group: ['짝수', '번호'] },
        },
      },
    });
  });

  it('getTagList', () => {
    const state = { matchedItems };

    const tagList = getTagList(state);

    expect(tagList).toEqual({
      1: { id: 1, name: '6월', group: ['짝수', '평가원', '달'] },
      2: { id: 2, name: '2016년', group: ['년', '짝수'] },
      3: { id: 3, name: '20번', group: ['번호', '짝수'] },
    });
  });

  describe('getRelatedTags', () => {
    it('when selected is empty', () => {
      const state = {
        matchedItems,
        selected: {
          groups: [],
          tags: {
            0: [],
          },
        },
      };

      const relatedTags = getRelatedTags(state);

      expect(relatedTags).toEqual({
        1: { id: 1, name: '2018년', group: ['짝수', '년'] },
        2: { id: 2, name: '6월', group: ['짝수', '월', '평가원'] },
        3: { id: 3, name: '20번', group: ['짝수', '번호'] },
        4: { id: 4, name: '2020년', group: ['짝수', '년'] },
        5: { id: 5, name: '3월', group: ['홀수', '월', '교육청'] },
        6: { id: 6, name: '21번', group: ['홀수', '번호'] },
        7: { id: 7, name: '11월', group: ['홀수', '월', '평가원', '수능'] },
        8: { id: 8, name: '30번', group: ['짝수', '번호'] },
      });
    });

    it('when selected has items', () => {
      const state = {
        matchedItems,
        selected: {
          groups: [],
          tags: {
            0: ['짝수'],
          },
        },
      };
    });
  });
});
