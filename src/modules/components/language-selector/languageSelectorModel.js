module.exports = Backbone.Model.extend({

    initialize: function () {
        this.setLanguages();
    },
    
    /**
     * Sets languages props.
     */
    setLanguages: function () {
        this.set({
            languages: [{
                code: 'en',
                name: 'English',
                direction: 'ltr'
            },
            {
                code: 'es',
                name: 'Spanish',
                direction: 'ltr'
            },
            {
                code: 'ar',
                name: 'Arabic',
                direction: 'rtl'
            }]
        });
    }
});