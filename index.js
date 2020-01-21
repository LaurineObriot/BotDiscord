const Discord = require('discord.js')
const bot = new Discord.client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Play = require('./commands/play')

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
	let commandUsed =
	Ping.parse(message) ||
	Google.parse(message) ||
	Play.parse(message)
})

bot.login('NjY5MTA4MDU1NDI5ODczNjY0.XibBlg.ZNQUN-VSvtVt2e6gVHUDuVSJ7xs')
