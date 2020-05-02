const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('name', config.reportsChannel);

    if (!target) return message.reply('➺ Please specify a member to report !');
    if (!reason) return message.reply('➺ Please specify a reason for this report !');
    if (!reports) return message.reply(`➺ Please create a channel called **${config.reportsChannel}** to log the reports !`);

    let embed = new discord.RichEmbed()
        .setColor('363940')
        .setThumbnail(target.user.avatarURL)
        .addField('➺ Reported Member:', `${target.user.tag}`)
        .addField('➺ Reported By:', `${message.author.tag}`)
        .addField('➺ Report Created At:', message.createdAt)
        .addField('➺ Reported In:', message.channel)
        .addField('➺ Reported Reason:', reason)
        .setFooter('➺ Reported user information', target.user.displayAvatarURL);

    message.channel.send(`${target} Was reported by ${message.author.tag} for **${reason}**`).then(msg => msg.delete(2000));
    reports.send(embed);

};

module.exports.help = {
    name: 'report'
};