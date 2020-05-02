const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
   const role = message.guild.roles.size;
   const online = (message.guild.members.filter(m => m.presence.status != 'offline').size - message.guild.members.filter(m=>m.user.bot).size)
      const embed = new Discord.RichEmbed()
            .setAuthor("➺ Server Name: " + message.guild.name, message.guild.iconURL)
            .setColor('363940')
            .addField('➺ **Members**:', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}`, true)
            .addField('➺ **Online**:', `${online}`, true)
            .addField("➺ **Bots**:", message.guild.members.filter(m=>m.user.bot).size)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
}
 
module.exports.help = {
name: "membercount"
}  