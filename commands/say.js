const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete();

if(!args.join(" ")){
  return message.channel.send("" + "Please enter something for the bot to say.")

}
let sayembed = new Discord.RichEmbed({
disabelEveryone: true})
.setColor('363940')
.addField(`${message.author.tag} wanted me to say:`, args.join(" "))
.setTimestamp(message.createdAt)

message.channel.send(sayembed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "say"
}