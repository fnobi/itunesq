var request     = require('request'),
    qs = require('querystring');

var itunesAPI = {
	BASE_URI: 'http://itunes.apple.com/'
};

itunesAPI.search = function (options, callback) {
	if (!options.term || !options.country) {
		return callback('no term or country', null);
	}

	request.get(
		itunesAPI.BASE_URI + 'search?' + qs.stringify(options),
		function (err, res, body) {
			callback(err, JSON.parse(body).results);
		}
	);
};

module.exports = itunesAPI;