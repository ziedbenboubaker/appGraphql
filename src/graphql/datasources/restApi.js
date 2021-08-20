const { RESTDataSource } = require("apollo-datasource-rest");

class RestApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5001/api";
  }

  parseBody(response) {
    return response.json();
  }

  async getListByName(name) {
    return this.get(`lists/${name}`);
  }

  async getItemsByListId(listId) {
    return this.get(`items/${listId}`);
  }

  async createItem(data) {
    return this.post(`items`, { ...data });
  }

  async deleteItem(id) {
    return this.delete(`items/${id}`);
  }
}

module.exports = RestApi;
