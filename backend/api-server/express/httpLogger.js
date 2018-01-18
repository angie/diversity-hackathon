const Logger = require('../logger');
const log = new Logger({
	level: 'HTTP'
});

module.exports = log;