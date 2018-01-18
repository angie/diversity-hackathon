class GenericError {

	constructor(err) {
		this.message = err.message;
		this.context = err;
		this.statusCode = 500;
		this.source = 'MongoDBAdapter';
	}

}

module.exports = {
	GenericError
};