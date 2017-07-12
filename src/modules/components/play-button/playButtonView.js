//var _ = require('underscore');

module.exports = Backbone.View.extend({
    
    events: {
        'click': 'playTrigger'
    },

    id: 'playButton',

    tagName: 'button',

    className: 'btn btn-default',

    template: _.template('<span class="glyphicon glyphicon-play" aria-hidden="true"></span> <%= label %>'),

    initialize: function (options) {
        this.options = options || {};
        _.bindAll(this, 'render');
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    /**
     * Triggers an event for appModule to load player.
     */
    playTrigger: function () {
        this.options.eventBus.trigger('playVideo');
    }
});