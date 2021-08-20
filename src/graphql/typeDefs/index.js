const { join } = require("path");
const { readFileSync } = require("fs");

module.exports = readFileSync(join(__dirname, "schema.graphql"), "utf-8");
