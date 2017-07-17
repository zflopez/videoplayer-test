module.exports = Backbone.Model.extend({
    initialize: function () {
        this.set({
            labels: {
                userScore: 'User Score',
                votes: 'votes'
            },
            percent: this.get('vote_average') * 10
        });
    }
});