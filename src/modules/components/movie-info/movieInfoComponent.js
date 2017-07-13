var movieInfoView = require('./movieInfoView.js');
var movieInfoModel = require('./movieInfoModel.js');

module.exports = function (eventBus, movie_info, lang) {
    return new movieInfoView({
        model: new movieInfoModel({
            movie_info: movie_info,
            lang: lang || 'en'
        }),
        eventBus: eventBus
    });
};