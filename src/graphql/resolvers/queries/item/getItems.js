const resolver = function (_, { listId }, { models: { ItemModel } }) {
  return ItemModel.find(listId);
};

module.exports = resolver;
