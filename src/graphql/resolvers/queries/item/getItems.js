const resolver = function (_, { listId }, { dataSources: { restApi } }) {
  return restApi.getItemsByListId(listId);
};

module.exports = resolver;
