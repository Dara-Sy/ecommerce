const db = require('../config/connection');

module.exports = {}

  getAllCategories(data) {
    return db.any(`
      SELECT * FROM categories
      `, data);
  }
}
