var util = require('util');

var formatResult = function (result) {
	if (!result.wrapperType) {
		return null;
	}

	if (result.wrapperType == 'track') {
		return util.format(
			[
				'[%s] %s / %s',
				' - %s'
			].join('\n'),
			result.wrapperType, result.trackName, result.artistName,
			result.trackViewUrl
		);

	}

};

module.exports = formatResult;