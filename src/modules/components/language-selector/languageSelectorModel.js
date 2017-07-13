module.exports = Backbone.Model.extend({

    defaults: {
        default: 'en'
    },

    initialize: function () {
        this.setLanguages();
    },

    setLanguages: function () {
        this.set({
            languages: [{
                code: 'en',
                name: 'English',
                direction: 'ltr',
                default: true
            },
            {
                code: 'es',
                name: 'Spanish',
                direction: 'ltr',
                default: false
            },
            {
                code: 'ar',
                name: 'Arabic',
                direction: 'rtl',
                default: false
            }]
        });
    }
});