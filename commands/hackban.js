
const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (bot, message, args) => {
const config = require("../config.json")
const prefix = config.prefix
const usage = new Discord.RichEmbed()
.setColor('363940')
.setThumbnail(bot.user.avatarURL)
.setTitle(" **Command**: " + prefix + "hackban")
.addField(" **Usage**", prefix + "hackban <ID> <reason>")
.addField(" **Example**", prefix + "hackban 130515926117253122 (SelfBot)")
.setDescription(" **Description**: " + "Bans a user without needing to be in the server.");

if (message.member.hasPermission("BAN_MEMBERS")) {
if (!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.reply('You don`t have sufficent permissions to do that!')
let user = args[0]
if (isNaN(user)) return message.channel.send(usage)
let reason = args[1] || " Moderator didn't give a reason.";
if (isNaN(user)) return message.channel.send(usage)
if (!user) return message.reply('You must supply a User Resolvable, such as a user id.')
let guild = message.member.guild;
if (user.length < 1) return message.channel.send(" You need to provide a valid user id to ban them.");
if (user === message.author.id) return message.channel.send(" Well no, you can't hackban yourself.");
if (message.guild.members.get(user)) return message.channel.send(" That user is in this server, please use ban instead.");
message.channel.send("ID: " + user + ", has been banned from the server.")

}

}
module.exports.help = {
name:"hackban"
}
