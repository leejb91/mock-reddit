var express = require('express');
var path = require('path');
var router = express.Router();

// serve index.html for all routes
router.get('/*', function (req, res, next) {
	res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
