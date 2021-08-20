async function resolver(
  _,
  { input: { name, listId } },
  { models: { ItemModel } }
) {
  const options = { name, listId };

  const car = await new ItemModel(options).save();

  return car;
}

module.exports = resolver;
