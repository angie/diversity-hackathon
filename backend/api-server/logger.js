const moment = require('moment');

class Logger {

	constructor({
		level
	}) {
		this.level = level;
	}

	error(message, context = false) {
		this._constructMessage('error', this.level, message, context);
	}

	info(message, context = false) {
		this._constructMessage('info', this.level, message, context);
	}

	warn(message, context = false) {
		this._constructMessage('warn', this.level, message, context);
	}

	_constructMessage(type, level, message, context) {
		console[type](
			moment().format('YYYY/MM/DD h:mm:ss') +
			'       ' +
			type.toUpperCase().padEnd(9) +
			' ' +
			level.padEnd(9) +
			' ' +
			message
		);

		if(context) {
			console.log(context);
		}
	}

}

module.exports = Logger;