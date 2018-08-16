const express = require('express');
const router = express.Router();
const resHandler = require('../server/resHandler');
const productsController = require('../server/productsController');



router.route('/products')
.get(
  productsController.getAll,
  resHandler.sendJSON)

// connecting route to categories through routes/categories.js

// router.route('/categories')
// .get(
//   controller.getCat,
//   resHandler.sendJSON)

module.exports = router;
