const resolver = async function (_, { name }, { dataSources: { restApi } }) {
  return restApi.getListByName(name);
};

module.exports = resolver;
