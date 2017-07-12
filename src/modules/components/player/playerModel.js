module.exports = Backbone.Model.extend({

	initialize: function () {
		console.log('modelo del player');
		this.checkBrowser();
	},

	/**
	 * Checks browser navigator and saves the value in the model.
	 */
	checkBrowser: function () {
		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
		this.set('isSafari', isSafari);
		console.log('isSafari', isSafari);
	}
});