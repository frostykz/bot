  const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('➺ Sorry, i dont have the perms to do this command ! I need **ADD_REACTIONS**.')
      const sayMessage = args.join(" ");
      if (sayMessage.length < 1) return message.channel.send("➺ Didn't provide a suggestion !")
    const embed = new Discord.RichEmbed()
     .setColor('363940')
     .addField("➺ Suggestion:", `**${sayMessage}**!`)
     .setFooter("➺ Suggestion by: " + message.author.username, message.author.avatarURL)
     .setTimestamp()
      message.channel.send({embed}).then(m => {
         m.react('⬆');
         m.react('⬇');
        })
    }
   
module.exports.help = {
name: "suggest"
}