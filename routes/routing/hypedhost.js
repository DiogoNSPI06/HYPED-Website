const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('hypedhost.ejs', {
        title: "Hosting service",
      })
		});
	}
};

module.exports.page = '/hypedhost';

