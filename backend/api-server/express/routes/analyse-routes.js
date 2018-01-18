const express = require('express');

const log = require('../httpLogger');
const AnalyseTextSentiment = require('../../domain/analyse-text-sentiment');
const GoogleAnalyseTextSentiment = require('../../adapters/google/google-analyse-text-sentiment');

const router = express.Router();
const analyseSentiment = new AnalyseTextSentiment(GoogleAnalyseTextSentiment);

router.post('/sentiment', async (req, res) => {
	const text = req.body.text;

	if(!text.trim()) {
		res.status(400).json({
			message: 'No text supplied.'
		});
	}

	try {
		const response = await analyseSentiment.analyse(text);
		res.json(response);
		log.info('Response sent to client.');
	} catch(err) {
		res.status(err.statusCode).json({
			source: err.source,
			message: err.message,
			context: err.context
		});

		log.info(`Error response sent. Status code [${err.statusCode}]`);
	}
});

module.exports = router;