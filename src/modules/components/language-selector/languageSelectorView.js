var template = require('./languageSelectorTemplate.html');

module.exports = Backbone.View.extend({

    events: {
        'change #languageSelector': 'languageTrigger'
    },

    tagName: 'section',

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

    /**
     * Triggers new selected language props.
     */
    languageTrigger: function () {
        var languageSelectedValue = this.$('#languageSelector').val(),
            languageSelectedProps = _.findWhere(this.model.get('languages'), { code: languageSelectedValue });
        this.options.eventBus.trigger('languageSelector:change', languageSelectedProps);
    }
});