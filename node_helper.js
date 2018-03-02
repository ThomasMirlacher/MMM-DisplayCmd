/* Magic Mirror
 * Module: MMM-OralB
 *
 * By Thomas Mirlacher
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const child_process = require('child_process');

module.exports = NodeHelper.create({
	socketNotificationReceived(notification, payload) {
		if (notification === 'MMM-DisplayCmd-GET_DATA') {
			this.config = payload;
			child_process.exec(this.config.cmd, (error, stdout, stderr) => {
				if (error) {
					console.log(error);
					return;
				}

				if (stdout) {
					this.sendSocketNotification('MMM-DisplayCmd-DISPLAY_DATA', {text: stdout});
				}
			});
		}
	}
});
