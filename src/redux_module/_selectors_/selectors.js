import _ from 'lodash';

const getFileList = (state) => {
  const fileItems = state.matchedItems.files.items;
  return _.assign({}, ..._.values(fileItems));
};

const getTagList = (state) => state.matchedItems.tags.items;

const getRelatedTags = (state) => {
  const fileList = getFileList(state);
  return _.assign({}, ..._.map(fileList, (file) => (file.tags)));
};

export { getFileList, getTagList, getRelatedTags };
