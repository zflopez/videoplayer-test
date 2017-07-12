module.exports = Backbone.View.extend({

    id: 'languageSelectorContainer',
    
    initialize: function() {
        console.log('selectorView');
        _.bindAll( this, 'render' );
        //this.render();
    },

    render: function() {
        this.$el.html(this);
        return this;
    }


});