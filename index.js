const Discord = require('discord.js')
const bot = new Discord.client()

bot.on('ready', function () {
	bot.user.setAvatar('./avatar.jpg')
	.then(() => console.log('avatar mis en place avec succès') )
	.catch(console.error)
})

bot.on('message', function (message) {
	if (message.content === '!ping') {
		message.channel.send('pong')
	}
})

bot.login('NjY5MTA4MDU1NDI5ODczNjY0.XibBlg.ZNQUN-VSvtVt2e6gVHUDuVSJ7xs')
