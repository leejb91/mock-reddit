var express = require('express');
var router = express.Router();
var redditController = require('../controllers/redditController');

/* GET home page. */
router.get('/', redditController.getList);
router.get('/:id', redditController.getComments);

module.exports = router;
