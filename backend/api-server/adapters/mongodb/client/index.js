const MongoClient = require('mongodb').MongoClient;

const DEFAULT_HOST = 'mongodb://localhost:27017';

const Logger = require('../../../logger');
const log = new Logger({
	level: 'MONGODB'
});

function createClient(dbName = 'test', dbHost = DEFAULT_HOST) {
	return new Promise((resolve, reject) => {
		log.info(`Attempting to connect to ${dbHost}`);

		MongoClient.connect(dbHost, function(err, client) {
			if(err) {
				reject(new Error('Error connecting to MongoDB'));
			}

			log.info("Connected successfully to server");
			log.info(`Selecting DB ${dbName}`);
			const db = client.db(dbName);

			resolve(db);
		});
	});
}

module.exports = {
	createClient
};