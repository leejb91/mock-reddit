var express = require('express');
var router = express.Router();
var request = require('request');

function getList(req, res, next) {
	request({url: 'http://reddit.com/r/instant_regret/hot.json', qs: req.query}, (err, response, body) => {
		if (err) return;
		res.send(JSON.parse(body))
	});
}

function getComments(req, res, next) {
	const id = req.params.id;
	request({url: 'http://reddit.com/r/instant_regret/comments/' + id + '.json'}, (err, response, body) => {
		if (err) return;
		res.send(JSON.parse(body))
	});
}

module.exports = {
	getList,
	getComments
};
