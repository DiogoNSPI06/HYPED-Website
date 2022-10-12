const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('hypedbot.ejs', {
        title: "Discord's best bot!",
      })
		});
	}
};

module.exports.page = '/hypedbot';
