var path = require('path');
var request = require('request');

module.exports = {
	getContractData: function (contract) {
		var contractPath = path.join(__dirname, '..', 'assets', 'investiments', contract + '.json');
		return require(contractPath);
	},

	scrapContractMarketInfos: function (uri) {
		return new Promise((resolve, reject) => {
			request.get(uri, (error, response, body) => {
				if (error) {
				reject(error);
				} else {
				resolve(JSON.parse(body));
				}
			});
		});
	}
}