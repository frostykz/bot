const Discord = require('discord.js');

//Define moment
const moment = require("moment");

exports.run = async (client, message, args) => {
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
	
	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('363940')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("➺ **ID**:", `${user.id}`, true)
		.addField("➺ **Name**:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("➺ **Created**:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("➺ **Joined server**:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("➺ **Bot**:", `${user.bot}`, true)
		.addField("➺ **Status**:", `${user.presence.status}`, true)
		.addField("➺ **Game**:", `${user.presence.game ? user.presence.game.name : 'nothing'}`, true)
		.addField("➺ **Ranks**:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
    }
module.exports.help = {
    name: "userinfo"
  
}