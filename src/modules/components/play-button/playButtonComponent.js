var playButtonView = require('./playButtonView.js');

module.exports = function (eventBus) {
    return new playButtonView({
        eventBus: eventBus
    });
};