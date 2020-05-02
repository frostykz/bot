const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it

  if (!message.member.hasPermission("BAN")) return message.reply("You don't have sufficent permissions to do that!");

  let user = message.mentions.users.first();
  if (!user) return message.reply("Please mention a user and reason.");

  let reason = args.join(" ");
  if(!reason) reason = "You didn't put a reason.";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("★ Banned member")
  .setColor("#363940")
  .setTimestamp()
  .addField("★ **Banned member**", `${user} **[**${user.id}**]**`)
  .addField("★ **Reason**:", reason)
  .addField("★ **Moderator**:", `${message.author} **[**${message.author.id}**]**`)
  .addField("★ **Time**:", message.createdAt)

  let banEmbed = new Discord.RichEmbed()
 .setAuthor(`___**User banned**___`, '')
  .setColor("#000000")
  .setDescription(`You are  ___**BANNED**___ by **${message.author} **, reason: \`\`\`${reason}\`\`\``)
  .addField("Information", `Moderator : ${message.author} | ${message.author.tag}\n Time : ${message.createdAt}`)
  
  user.send(banEmbed)
}
exports.help = {
  name: "ban"
}