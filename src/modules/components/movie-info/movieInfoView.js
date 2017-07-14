//require('./movieStyle.scss'); meter referencia a #movieInfoContainer y como background image url la de backdrop
var moment = require('moment'),
    duration = require('moment-duration-format'),
    rateChartComponent = require('./../rate-chart/rateChartComponent.js'),
    template = require('./movieInfoTemplate.html');

module.exports = Backbone.View.extend({

    tagName: 'section',

    id: 'movieInfoContainer',

    //class: '',

    initialize: function () {
        _.bindAll(this, 'render');
        // Waits for fetch request finished and model setting to save labels and render component.
        this.listenTo(this.model, 'change', this.setFetchLabels);
    },

    render: function () {
        this.$el.html(template.movieInfoTemplate(this.model.toJSON()));
        this.loadRateChart();
        return this;
    },

    /**
     * Sets labels for template from fetch request and renders component.
     */
    setFetchLabels: function () {
        var imdbRoot = this.model.get('movie_info').imdb_url;
        this.model.set({
            imdbLink: imdbRoot + this.model.get('imdb_id'),
            release_year: moment(this.model.get('release_date')).year(),
            runtimeFormatted: moment.duration(this.model.get('runtime'), "minutes").format("h[h] m[m]"),
            backdropImage: '',
            posterImage: ''
        }, { silent: true });

        this.render();
    },

    /**
     * Creates rate chart component instance and appends it to movieInfo.
     */
    loadRateChart: function () {
        
        var voteData = {
            vote_average: this.model.get('vote_average'),
            vote_count: this.model.get('vote_count')
        };
        this.rateChart = new rateChartComponent(voteData);
        this.$('.chartContainer').append(this.rateChart.el);
    },

    /**
     * Removes child views and component view itself when language selector changes.
     */
    remove: function () {
        this.rateChart.remove();
        //this.model.destroy();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});