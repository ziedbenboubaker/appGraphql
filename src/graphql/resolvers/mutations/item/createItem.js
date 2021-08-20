async function resolver(_, { input }, { dataSources: { restApi } }) {
  return restApi.createItem(input);
}

module.exports = resolver;
