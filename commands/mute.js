const Discord = require("discord.js");
const bot = new Discord.Client();
let chrono = require("chrono-node");
var moment = require('moment');
const superagent = require("superagent");
exports.run = async (bot, message, args) => {
  const config = require("../config.json")
  const prefix = config.prefix
  const usage = new Discord.RichEmbed()
            .setColor('363940')
            .setThumbnail(bot.user.avatarURL)
            .setTitle("➺ **Command**: " + prefix + "mute")
            .addField("➺ **Usage**:", prefix + "mute @Someone <minutes> <reason>")
            .addField("➺ **Example**:", prefix + "mute @Someone 5 spamming in general.")
            .setDescription("➺  **Description**: " + "Gives a user the muted role for x minutes");

  if (message.member.hasPermission("KICK_MEMBERS")) {
  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.reply('➺ You do no have access.')
  if (message.mentions.users.size < 1) return message.channel.send(usage)
  let user = message.guild.member(message.mentions.users.first());
  if (user.highestRole.position >= message.member.highestRole.position) return message.reply('➺ I cant mute that member. They are the same level as you or higher.');
  let messagez = parseInt(args[1])
  if (isNaN(messagez)) return message.channel.send("➺ That is not a valid time.")
  if (messagez > 1440) return message.channel.send('➺ Maximum time is 1 day (1440 minutes).');
  if (messagez < 1) return message.channel.send('➺ Time must be at least 1 minute.');
  let reason = args.slice(2).join(' ') || "➺ Moderator didn't give a reason.";
  
if (reason.length < 1) return;
  let muteRole = bot.guilds.get(message.guild.id).roles.find(r => r.name == 'Muted') || bot.guilds.get(message.guild.id).roles.find('name', 'muted'); 
  if (!muteRole) return message.channel.send("➺ I can not find a Muted role :x:");



    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.send("➺ The user has been successfully muted for " + messagez + " minute(s) :white_check_mark:") 
    });
  }
}
module.exports.help = {
  name: "mute"
}