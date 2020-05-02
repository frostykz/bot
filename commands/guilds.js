const Discord = require("discord.js");

module.exports.run = async(bot, message, args, admin) => {
    if(admin) {
      return message.author.send("tu n'as pas les droits pour cette commande").catch(console.error)
    };
message.delete();
		bot.guilds.forEach(guild => { 
	 var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
     invite.createInvite().then(invite => message.channel.send(`Connecté sur : ${guild.name} | ${guild.memberCount} membres | Son Invitation : ${invite}`));
  }).catch(console.error);
}

module.exports.help = {
  name: "list"
  }



