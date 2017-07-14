module.exports = Backbone.Model.extend({
    initialize: function () {
        this.set({
            labels: {
                userScore: 'User Score',
                votes: 'votes'
            }
        });
    }
});