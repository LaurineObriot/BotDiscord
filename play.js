const Command = require ('./command')

module.exports = class Play extends Command {

	static match (message) {
		return message.content.startsWith('!play')
	}

	static action (message) {
		console.log(message.guild.channels.array())
	}

}
