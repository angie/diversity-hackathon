const Logger = require('../logger');
const log = new Logger({
	level: 'SENTIMENT'
});

class AnalyseTextSentiment {

	constructor(Client) {
		this.client = new Client();
	}

	async analyse(text) {
		try {
			const startTime = new Date().getTime();
			const result = await this.client.analyze(text);
			const timeTaken = new Date().getTime() - startTime;

			log.info(`Response received from sentiment. ${timeTaken}ms`);

			return result;
		} catch(e) {
			throw e;
		}
	}

}

module.exports = AnalyseTextSentiment;