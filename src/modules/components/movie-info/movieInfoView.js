var rateChartComponent = require('./../rate-chart/rateChartComponent.js');
//inyectar aquí también el playButton y el selector de idioma?

module.exports = Backbone.View.extend({

    initialize: function () {
        _.bindAll(this, 'render');
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.loadRateChart();
        return this;
    },

    loadRateChart: function () {
        this.rateChart = new rateChartComponent({ vote_average: this.model.get('vote_average') });
    }
});