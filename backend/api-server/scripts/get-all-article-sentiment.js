const fs = require('fs');
const request = require('request-promise');
const ProgressBar = require('progress');

const rawData = fs.readFileSync('./data/articles-array.json');
const allArticles = JSON.parse(rawData);

const args = process.argv;
const from = args[2] || 0;

const articles = allArticles.splice(from, 1000);

async function go() {
	const progressBar = new ProgressBar('[:bar] :percent :etas', { total: articles.length });

	for (const article of articles) {
		try {
			const sentiment = await request({
				uri: `http://localhost:3000/analyse/sentiment`,
				method: 'POST',
				json: {
					text: article.body
				}
			});

			await request({
				uri: `http://localhost:3000/articles/${article.id}/sentiment`,
				method: 'POST',
				json: {
					sentiment: sentiment.sentiment
				}
			});

			progressBar.tick();
		} catch (e) {
			console.log('Something went wrong, but I shall continue.')
		}
	}

	return true;
}

console.log('Starting! Offset from', from, 'for total of', articles.length);
// process.exit();

go()
	.then(() => {
		console.log('All done!');
	})
	.catch(err => {
		console.log('Something goofed');
		console.log(err);
	});