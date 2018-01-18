const express = require('express');

const log = require('../httpLogger');
const mongodbArticles = require('../../adapters/mongodb/mongodb-articles-repository');
const Articles = require('../../domain/articles-repository');
const articles = new Articles(mongodbArticles);

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const allArticles = await articles.getArticles();
		res.json(allArticles);
	} catch(err) {
		console.log(err);
		res.status(err.statusCode || 500).json({
			source: err.source || 'Unknown',
			message: err.message,
			context: err.context || err
		});

		log.error(`Error response sent. Status code [${err.statusCode}]`);
	}
});

router.get('/:id', async (req, res) => {
	const articleId = req.params.id;

	try {
		log.info(`Requesting article: ${articleId}`);
		const article = await articles.getArticle(articleId);

		res.json(article);
	} catch(err) {
		res.status(err.statusCode || 500).json({
			source: err.source || 'Unknown',
			message: err.message,
			context: err.context || err
		});

		log.error(`Error response sent. Status code [${err.statusCode}]`);
	}
});

router.post('/:id/sentiment', async (req, res) => {
	const articleId = req.params.id;
	const articleSentiment = req.body.sentiment;

	try {
		log.info(`Adding article sentiment: ${articleId}`);
		const result = await articles.storeArticleSentiment(articleId, articleSentiment);
		res.json(result);
	} catch(err) {
		res.status(err.statusCode || 500).json({
			source: err.source || 'Unknown',
			message: err.message,
			context: err.context || err
		});

		log.error(`Error response sent. Status code [${err.statusCode}]`);
	}
});

module.exports = router;