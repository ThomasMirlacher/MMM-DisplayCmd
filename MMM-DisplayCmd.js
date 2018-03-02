/* global Module */

/* Magic Mirror
 * Module: MMM-Fortune
 *
 * By Thomas Mirlacher
 * MIT Licensed.
 */

Module.register('MMM-DisplayCmd',{
	defaults: {
		cmd: '/usr/games/fortune -n 200 -s',
		updateInterval: 30,	// s
		animationSpeed: 1000	// ms
	},

	start() {
		Log.info(`Starting module: ${this.name}`);

		this.notificationData = {text: 'loading...'};
		this.sendSocketNotification('MMM-DisplayCmd-GET_DATA', this.config);

		setInterval(() => {
			this.sendSocketNotification('MMM-DisplayCmd-GET_DATA', this.config);
		}, this.config.updateInterval*1000);
	},

	getTemplate() {
		return 'MMM-DisplayCmd.njk';
	},

	getTemplateData() {
		return this.notificationData;
	},

	socketNotificationReceived(notification, payload) {
		if (notification === 'MMM-DisplayCmd-DISPLAY_DATA') {
			this.notificationData = payload;
			this.updateDom(this.config.animationSpeed);
		}
	}
});
