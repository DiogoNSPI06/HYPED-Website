const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.redirect('https://loja.hypeds.com/')
		});
	}
};

module.exports.page = '/minecraft';