var EasyPieChart = require('easy-pie-chart'),
    template = require('./rateChartTemplate.html');

module.exports = Backbone.View.extend({

    id: 'rateChart',

    tagName: 'ul',

    initialize: function () {
        _.bindAll(this, 'render');
        this.render();
    },

    render: function () {
        this.$el.html(template.chartTemplate(this.model.toJSON()));
        this.loadChart();
        return this;
    },

    /**
     * Creates a EasyPieChart instance with attributes.
     */
    loadChart: function () {
        var element = this.$('.chart')[0];
        new EasyPieChart(element, {
            barColor: "#21d07a",
            trackColor: "#204529",
            scaleColor: false,
            scaleLength: 0,
            lineCap: "round",
            lineWidth: 7,
            trackWidth: void 0,
            size: 60,
            rotate: 0,
            animate: {
                duration: 1e3,
                enabled: !0
            }
        });
    }
});