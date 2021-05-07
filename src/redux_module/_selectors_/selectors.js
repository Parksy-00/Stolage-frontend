import _ from 'lodash';

const getFileList = (state) => {
  const ret = {};
  const files = state.matchedItems.files.items;
  const searchBarIds = _.keys(files);
  _.forEach(searchBarIds, (id) => {
    _.forIn(files[id], (file) => {
      if (!_.has(ret, file.id)) {
        ret[file.id] = file;
      }
    });
  });
  return ret;
};

const getTagList = () => {};

export { getFileList, getTagList };
