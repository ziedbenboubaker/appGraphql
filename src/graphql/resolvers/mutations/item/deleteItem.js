const { ApolloError } = require("apollo-server-express");

const GraphQlErrors = require("../../../errors");

const resolver = function (_, { id }, { models: { ItemModel } }) {
  return ItemModel.findById(id).then((item) => {
    if (!item) {
      throw new ApolloError(GraphQlErrors.ITEMS_NOT_EXISTS);
    }
    return item.remove().then(() => true);
  });
};

module.exports = resolver;
