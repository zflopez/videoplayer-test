var getMovieInfo = require('./../../../services/request-url.js');

module.exports = Backbone.Model.extend({
    initialize: function () {
        this.setLabels();
        this.selectedLangLabels();
    },

    /**
     * Set language labels.
     */
    setLabels: function () {
        this.set({
            labels: {
                en: {
                    genres: 'Genres',
                    imdb: 'IMDb',
                    runtime: 'Runtime',
                    overview: 'Synopsis',
                    productionCountries: 'Country'
                },
                es: {
                    genres: 'Géneros',
                    imdb: 'IMDb',
                    runtime: 'Duración',
                    overview: 'Sinopsis',
                    productionCountries: 'País'
                },
                ar: {
                    genres: 'الأنواع',
                    imdb: 'IMDb',
                    runtime: 'وقت التشغيل',
                    overview: 'ملخص',
                    productionCountries: 'بلد'
                }
            }
        }, { silent: true });
    },

    /**
     * Picks selected language labels for template.
     */
    selectedLangLabels: function (lang) {
        var lang = lang || this.get('lang'),
            selectedLangLabels = this.get('labels')[lang];
        this.set('langLabels', selectedLangLabels, { silent: true });
    },

    /**
     * Returns movie info JSON from fetch request and sets it to the model.
     */
    getMovieInfo: function (newLang) {
        var scope = this,
            lang = newLang || this.get('lang');

        getMovieInfo({ id: this.get('movie_info').movie_id, lang: lang }, function (data) {
            scope.set(data);
        });
    }
});