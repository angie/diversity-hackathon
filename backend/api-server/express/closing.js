const log = require('./httpLogger');

function catchNotFound(req, res, next) {
	log.warn('Not Found');
	res.status(404).json({
		message: 'Unable to ' + req.method.toUpperCase() + ' ' + req.path
	});
}

module.exports = (app) => {
	app.use(catchNotFound);
};