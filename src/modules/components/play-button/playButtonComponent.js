var playButtonView = require('./playButtonView.js');
var playButtonModel = require('./playButtonModel.js');

module.exports = function (eventBus) {
    return new playButtonView({
        model: new playButtonModel(),
        eventBus: eventBus
    });
};