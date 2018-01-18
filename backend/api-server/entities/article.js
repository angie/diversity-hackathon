class Article {

	constructor({
		id,
		uri,
		headline,
		summary,
		body,
		lastPublished,
		tags
	}) {
		this.id = id;
		this.uri = uri;
		this.headline = headline;
		this.summary = summary;
		this.body = body;
		this.lastPublished = lastPublished;

		this.tags = {
			ldp: tags.ldp || [],
			mango: tags.mango || [],
			starfruit: tags.starfruit || []
		}
	}

}