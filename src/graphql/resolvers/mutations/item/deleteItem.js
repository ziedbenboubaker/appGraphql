async function resolver(_, { id }, { dataSources: { restApi } }) {
  return restApi.deleteItem(id);
}

module.exports = resolver;
