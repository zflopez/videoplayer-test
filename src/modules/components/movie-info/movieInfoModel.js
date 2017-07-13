var getMovieInfo = require('./../../../services/request-url.js');

module.exports = Backbone.Model.extend({
    initialize: function () {
        console.log('movieInfoModel');
        this.setLabels();
        this.selectedLangLabels();
        this.getMovieInfo();
    },

    /**
     * Set labels.
     */
    setLabels: function () {
        this.set({
            labels: {
                en: {
                    genres: 'Genres',
                    imdb: 'IMDb',
                    runtime: 'Runtime',
                    overview: 'Synopsis',
                    rate: 'User Score'
                },
                es: {
                    genres: 'Géneros',
                    imdb: 'IMDb',
                    runtime: 'Duración',
                    overview: 'Sinopsis',
                    rate: 'Votaciones'
                },
                ar: {
                    genres: 'الأنواع',
                    imdb: 'IMDb',
                    runtime: 'وقت التشغيل',
                    overview: 'ملخص',
                    rate: 'النتيجة المستخدم'
                }
            }
        }, { silent: true });
    },

    /**
     * Picks selected language labels for template.
     */
    selectedLangLabels: function () {
        var selectedLangLabels = this.get('labels')[this.get('lang')];
        this.set('langLabels', selectedLangLabels, { silent: true });
    },

    /**
     * Returns JSON from fetch request and sets it to the model.
     */
    getMovieInfo: function () {
        this.set(getMovieInfo(this.get('movie_info').movie_id, this.get('lang')));
    }

});