var movieInfoView = require('./movieInfoView.js');
var movieInfoModel = require('./movieInfoModel.js');

module.exports = function (eventBus, movie_id, lang) {
    return new movieInfoView({
        model: new movieInfoModel({
            movie_id: movie_id,
            lang: lang || 'en'
        }),
        eventBus: eventBus
    });
};