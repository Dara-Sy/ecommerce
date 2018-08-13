var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "photography",
    img_url: "http://res.cloudinary.com/daracell/image/upload/v1534018227/pure/square.jpg"
  }, {
    id: 2,
    name: "candles",
    img_url: "http://res.cloudinary.com/daracell/image/upload/v1534018226/pure/candles.jpg"
  }]);
});

module.exports = router;
