module.exports = Backbone.Model.extend({
    
    defaults: {

    },
    
    initialize: function() {
        console.log('languageSelectorModel');
        this.setLanguages();
    },

    setLanguages: function() {
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
                direction: 'ltr'
            },
            {
                code: 'ar',
                name: 'arabic',
                direction:'rtl'
            }]
        });
    }
});