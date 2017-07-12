var _ = require('underscore');

module.exports = Backbone.View.extend({

    events: {
        'click': 'playTrigger'
    },

    id: 'playButton',

    template: _.template('<button>PLAY</button>'),

    initialize: function (options) {
        this.options = options || {};
        _.bindAll(this, 'render');
        this.render();
    },

    render: function () {
        console.log('render botón', this.template);
        this.$el.html(this.template);
        return this;
    },

    playTrigger: function () {
        this.options.eventBus.trigger('playVideo');
    }
});