const categoriesDB = require('../models/categoriesModels');

module.exports = {

  async getAllCat(req, res, next) {
    try {
      res.locals.categories = await categoriesDB.getAllCategories(req.query);
      next();
    } catch(e) {
      next(e);
    }
  }

};
