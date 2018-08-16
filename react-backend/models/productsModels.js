const db = require('../config/connection');

module.exports = {
  getAllProducts(data) {
    return db.many(`
      SELECT * FROM products
      `, data);
  }
}
