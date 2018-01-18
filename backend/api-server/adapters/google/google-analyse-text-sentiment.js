const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

const {GenericError} = require('./errors');
const Logger = require('../../logger');

const log = new Logger({
	level: 'GOOGLE'
});

class GoogleAnalyseTextSentiment {
	async analyze(text) {
		const document = {
			content: text,
			type: 'PLAIN_TEXT',
		};

		log.info('Submitting text to sentiment API');

		try {
			const result = await client.analyzeSentiment({document: document});

			return {
				originalText: text,
				sentiment: result[0]
			}
		} catch (requestErr) {
			const err = new GenericError(requestErr);
			log.error(err.message);
			throw err;
		}
	}
}

module.exports = GoogleAnalyseTextSentiment;