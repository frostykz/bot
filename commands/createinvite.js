const Discord = require("discord.js");

exports.run = async (client, message, args, color) => {
  try {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('363940')
    .setDescription(`**Permanent Invite Link**: __${invite}__  `);
    message.channel.send(embed);
  });
    } catch(err) {
      message.channel.send(`Oops, we got a error ! Error: **${err}** !`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'createinvite',
  category: 'Util',
  description: 'Make a new invite link from specific channel',
  usage: 'createinvite'
}
