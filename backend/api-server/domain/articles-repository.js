class ArticlesRepository {

	constructor(Client) {
		this.client = new Client();
	}

	async getArticles() {
		return await this.client.getArticles();
	}

	async getArticle(id) {
		const article = await this.client.getArticle(id);

		const sentiment = await this.client.getArticleSentiment(id);
		const genderBias = await this.client.getArticleGenderBias(id);

		article.sentiment = sentiment.sentiment;
		article.genderBias = genderBias.genderBias;

		return article;
	}

	async getArticleSentiment(id) {
		return await this.client.getArticleSentiment(id);
	}

	async storeArticleSentiment(id, sentiment) {
		return await this.client.storeArticleSentiment(id, sentiment);
	}

	async updateArticle(id, article) {
		return await this.client.updateArticle(id);
	}
}

module.exports = ArticlesRepository;