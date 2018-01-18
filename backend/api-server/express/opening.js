const bodyParser = require('body-parser');
const log = require('./httpLogger');

function logHTTP(req, res, next) {
	log.info(`"${req.method} ${req.url} HTTP/${req.httpVersion}"`);
	next();
}

function checkContentType(req, res, next) {
	const contentType = req.headers['content-type'];
	const method = req.method;

	if(method === 'POST' && contentType !== 'application/json') {
		res.status(415).json({
			message: 'Unsupported media type. POST requests require application/json'
		});
	}

	next();
}

module.exports = (app) => {
	app.use(bodyParser.json());
	app.use(checkContentType);
	app.use(logHTTP);
};