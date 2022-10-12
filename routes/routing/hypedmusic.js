const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('hypedmusic.ejs', {
        title: "Music",
      })
		});
	}
};

module.exports.page = '/hypedmusic';
