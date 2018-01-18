const mongoDBClient = require('./client');
const getDB = mongoDBClient.createClient();

const { GenericError } = require('./errors');
const Logger = require('../../logger');

const log = new Logger({
	level: 'MONGODB'
});

class MongoDBArticlesRepository {

	getArticles() {
		return getDB.then(db => {
			const collection = db.collection('articles-nov-2017');

			return new Promise((resolve, reject) => {
				collection.find({}).toArray((err, docs) => {
					if(err) {
						return reject(err);
					}

					log.info(`Found articles [${docs.length}]`);

					resolve(docs);
				});
			});
		});
	}

	getArticle(articleId) {
		return getDB.then(db => {
			const collection = db.collection('articles-nov-2017');

			return new Promise((resolve, reject) => {
				collection.find({"id" : articleId}).toArray((err, docs) => {
					if(err) {
						return reject(err);
					}

					const article = docs[0];

					if(!article) {
						return reject(new Error('Article not found'));
					}

					log.info(`Record found for ID [${article.id}]`);

					resolve(article);
				});
			});
		});
	}

	getArticleSentiment(articleId) {
		return getDB.then(db => {
			const collection = db.collection('articles-sentiment-nov-2017');

			return new Promise((resolve, reject) => {
				collection.find({"articleId" : articleId}).toArray((err, docs) => {
					if(err) {
						return reject(err);
					}

					const article = docs[0];

					if(!article) {
						return resolve(false);
					}

					log.info(`Sentiment found for ID [${article.id}]`);

					resolve(article);
				});
			});
		});
	}

	storeArticleSentiment(articleId, sentiment) {
		return getDB.then(db => {
			const collection = db.collection('articles-sentiment-nov-2017');

			return new Promise((resolve, reject) => {
				const document = {
					articleId,
					sentiment
				};

				collection.insertMany([document], (err, result) => {
					if(err) {
						return reject(err);
					}

					log.info(`Inserted data result [${result.result.n}]`);

					resolve({
						inserted: result.result.n
					});
				});
			});
		});
	}

	getArticleGenderBias(articleId) {
		return getDB.then(db => {
			const collection = db.collection('articles-gender-bias-nov-2017');

			return new Promise((resolve, reject) => {
				collection.find({"articleId" : articleId}).toArray((err, docs) => {
					if(err) {
						return reject(err);
					}

					const article = docs[0];

					if(!article) {
						return resolve(false);
					}

					log.info(`Sentiment found for ID [${article.id}]`);

					resolve(article);
				});
			});
		});
	}
}

module.exports = MongoDBArticlesRepository;