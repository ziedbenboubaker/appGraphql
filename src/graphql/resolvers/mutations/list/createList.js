async function resolver(_, { input: { name } }, { models: { ListModel } }) {
  const options = { name };

  const car = await new ListModel(options).save();

  return car;
}

module.exports = resolver;
