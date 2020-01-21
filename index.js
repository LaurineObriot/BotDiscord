const Discord = require('discord.js')
const bot = new Discord.client()
const Google = require('./commands/google')

bot.on('ready', function () {
	// bot.user.setAvatar('./avatar.jpg').catch(console.error)
	// bot.user.setGame('Préparation du tutoriel').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
	member.createDM().then(function (channel) {
		return channel.send('Bienvenue sur le channel' + member.displayName)
	}).catch(console.error)
})

bot.on('message', function (message) {
	if (Google.match(message)) {
		return Google.action(message)
	}
	if (message.content === '!ping') {
		message.channel.send('pong')
	}
})

bot.login('NjY5MTA4MDU1NDI5ODczNjY0.XibBlg.ZNQUN-VSvtVt2e6gVHUDuVSJ7xs')
