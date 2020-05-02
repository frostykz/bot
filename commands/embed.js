const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No.");
  let botmessage = args.join(" ");
    let say = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(botmessage)
    .setColor('363940')
    .setTimestamp()
  message.channel.send(say);
    } catch(err) {
      message.channel.send(`Oops, we got a error right now ! Erro: **${err}**`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embedsay', 'emsay'],
  permLevel: "Users"
};

exports.help = {
  name: 'esay',
  category: 'Util',
  description: 'Make copy of your previous text',
  usage: 'say [text]'
};