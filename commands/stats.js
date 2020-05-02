const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  
  
  let avatar = bot.displayAvatarURL
  let statsem = new Discord.RichEmbed()
  .setAuthor(`Requested by: ${message.author.username}`, avatar)
  .addField("➺ **Proccesed**:", `**NodeJS**: ${process.version}\n**Discord.JS**: ${require('discord.js').version}`, true)
  .addBlankField()
  .addField("➺ **Memory used**:", Math.round(process.memoryUsage().heapUsed /512/512) + "/512 MB", true)
  .addField("➺ **Users**:", `${bot.users.size} connected`, true)
  .addField("➺ **Servers**:", `${bot.guilds.size} connected`, true)
  .setFooter("➺ Time Of POwer Community-Moderation")

  return message.channel.send(statsem)
  
}
             
            
module.exports.help = {
    name: "stats"
  
}