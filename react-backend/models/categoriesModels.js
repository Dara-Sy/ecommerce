const db = require('../config/connection');

module.exports = {
  getAllCategories(data) {
    return db.many(`
      SELECT * FROM categories
      `, data);
  }
}
