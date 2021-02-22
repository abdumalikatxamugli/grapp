const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const User = require('../models/user.js');
const axios = require('axios');
const md5 = require('md5');

const users_controller = () => {
	const login = async (event, data) => {
		axios.post('http://edupark.uz/auth.php', {
			username: data.login,
			password: data.password
		})
			.then(function (response) {
				let data = response.data;
				if (data.auth == true) {
					(async () => {
						let user = await User.findOne({ where: { SYSTEM_ID: data.id } });
						if (user == null) {
							await User.create({
								NAME: data.name,
								SYSTEM_ID: data.id
							});
						}
						event.reply('user-login-success', data);
					})();
				} else {
					event.reply('user-login-error');
				}
			})
			.catch(function (error) {
				event.reply('user-login-notconnected');
			});
	}
	const set_local_password = async (event, data) => {
		var user = await User.findOne({ where: { SYSTEM_ID: data.user_id } });
		user.LOCAL_PASSWORD_HASH = md5(data.local_password);
		await user.save();
		event.reply('set-local-password-success', user);
	}
	const local_password_init = async (event, data) => {
		let users = await User.findAll({ raw: true });
		event.reply('local-password-init-success', users);
	}
	const check_local_pass = async (event, data) => {
		const user = await User.findOne({
			where: {
				SYSTEM_ID: data.id,
				LOCAL_PASSWORD_HASH: md5(data.password)
			}
		});

		if (user) {
			event.reply('check-local-pass-success', user);
			return user.id;
		} else {
			event.reply('check-local-pass-error');
		}
	}
	return {
		login: login,
		set_local_password: set_local_password,
		local_password_init: local_password_init,
		check_local_pass: check_local_pass
	}
}
module.exports = users_controller();