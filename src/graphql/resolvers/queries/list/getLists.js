const resolver = function (_, { name }, { models: { ListModel } }) {
  return ListModel.find({ name });
};

module.exports = resolver;
