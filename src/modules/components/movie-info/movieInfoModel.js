module.exports = Backbone.Model.extend({
    initialize: function() {
        console.log('movieInfoModel');
        this.setLabels();
    },

    setLabels: function() {
        this.set({
            languages: {
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
        });
    }
});