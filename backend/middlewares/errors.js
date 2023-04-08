module.exports = function (app) {
	app.use(function (err, req, res, next) {
		console.log(`[Error]: ${err}`);
		res.status(500).send(`Error on server! Check the logs for more details.`);
	});
};
