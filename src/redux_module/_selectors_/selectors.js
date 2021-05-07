import _ from 'lodash';

const getFileList = (state) => {
  const fileItems = state.matchedItems.files.items;
  return _.assign({}, ..._.values(fileItems));
};

const getTagList = (state) => state.matchedItems.tags.items;

export { getFileList, getTagList };
