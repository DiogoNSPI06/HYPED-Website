const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('hypedcloud.ejs', {
        title: "Free cloud storage!",
      })
		});
	}
};

module.exports.page = '/hypedcloud';
