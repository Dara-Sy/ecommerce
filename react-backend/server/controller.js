const productsDB = require('./models');

module.exports = {

    async getAll(req, res, next) {
    // hit the db to get favorites list
    try {
      // req.body.favesid = req.params.favesid;
      // Where are you getting faves id from?
      res.locals.products = await productsDB.getAllProducts(req.query);
      next();
    } catch (e) {
      next(e);
    }
  },

  async getCat(req, res, next) {
    try {
      res.locals.categories = await productsDB.getAllCategories(req.query);
      next();
    } catch(e) {
      next(e);
    }
  }

}





  // function getAll(req, res, next) {
  //   console.log('List all the products')

  //   productsDB.getAllProducts(req.query)
  //     .then((data) => {
  //       res.locals.products = data
  //       console.log(res.locals.products)
  //       next()
  //     })
  //     .catch((err) => {
  //       next(err)
  //     })
  // }
