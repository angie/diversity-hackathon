const express = require('express');
const Logger = require('./logger');

const app = express();

const log = new Logger({
	level: 'SERVER'
});

// Routes
const opening = require('./express/opening');
const closing = require('./express/closing');
const analyseRoutes = require('./express/routes/analyse-routes');
const articlesRoutes = require('./express/routes/articles-routes');

opening(app);
app.use('/analyse', analyseRoutes);
app.use('/articles', articlesRoutes);
closing(app);

app.listen(3000, () => {
	log.info('Listening on port 3000!');
});