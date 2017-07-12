var dashjs = require('dashjs');
var template = require('./playerTemplate.html');

module.exports = Backbone.View.extend({

	tagName: 'section',

	id: 'playerContainer',

	initialize: function (options) {
		console.log('vista del player');
		this.options = options || {};
		this.listenTo(this.model, 'change:isSafari', this.render);
		//this.render();
	},

	render: function () {
		this.$el.html(template.playerTemplate(this.model.toJSON()));
		this.loadPlayer(this.model.get('isSafari'));
		return this;
	},

	/**
	 * Checks browser to load DashJS or HLS native player.
	 */
	loadPlayer: function(isSafari) {
		if (isSafari === true) {
			return this.model.set('videoUrl', this.options.config.hls_video_url);
		}
		this.loadDashPlayer(this.options.config.dash_video_url);
	},

	/**
	 * Load DashJS player.
	 */
	loadDashPlayer: function(video_url) {
		this.player = dashjs.MediaPlayer.create();
		this.player.initialize(this.$('#videoPlayer'), video_url, true);
		this.player.attachTTMLRenderingDiv(this.$('#videoSubs'));
	}
});