var playerView = require('./playerView.js'),
	playerModel = require('./playerModel.js');

module.exports = function (eventBus, config) {
	return new playerView({
		model: new playerModel(),
		eventBus: eventBus,
		config: config
	});
};