import _ from 'lodash';

const getFileList = (state) => {
  const fileItems = state.matchedItems.files.items;
  return _.assign({}, ..._.values(fileItems));
};

const getTagList = (state) => state.matchedItems.tags.items;

const getRelatedTags = (state) => {
  const ID = state.searchBarID.current;
  const files = state.matchedItems.files.items[ID];
  return _.isEmpty(files)
    ? _.keyBy(state.allTags.tags, 'id')
    : _.assign({}, ..._.map(files, (file) => (file.tags)));
};

export { getFileList, getTagList, getRelatedTags };
