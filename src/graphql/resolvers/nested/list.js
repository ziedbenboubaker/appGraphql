module.exports = {
  id: (_) => _._id,
  items: (_, __, { dataSources: { restApi } }) =>
    restApi.getItemsByListId(_._id),
};
