var movieInfoView = require('./movieInfoView.js');
var movieInfoModel = require('./movieInfoModel.js');

module.exports = function (eventBus) {
    return new movieInfoView({
        model: new movieInfoModel(),
        eventBus: eventBus
    });
};