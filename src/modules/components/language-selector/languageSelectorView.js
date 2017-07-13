var template = require('./languageSelectorTemplate.html');

module.exports = Backbone.View.extend({

    events: {
        'change #languageSelector': 'languageTrigger'
    },

    id: 'languageSelectorContainer',

    initialize: function (options) {
        this.options = options || {};
        _.bindAll(this, 'render');
        this.render();
    },

    render: function () {
        this.$el.html(template.languageSelectorTemplate(this.model.toJSON()));
        return this;
    },

    languageTrigger: function () {
        var languageSelectedValue = this.$('#languageSelector').val(),
            languageSelectedProps = _.findWhere(this.model.get('languages'), { code: languageSelectedValue });
        this.options.eventBus.trigger('languageSelector:change', languageSelectedProps);
    }
});