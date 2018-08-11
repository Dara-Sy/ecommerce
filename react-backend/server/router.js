const express = require('express');
const router = express.Router();
const resHandler = require('./resHandler');
const controller = require('./controller');


router.route('/products')
.get(
  controller.getAll,
  resHandler.sendJSON)

module.exports = router;
