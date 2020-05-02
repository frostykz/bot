const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embedçekiliş = new Discord.RichEmbed()
        .setTitle("➺ **LOTTERY:**")
        .setDescription(`The winner is: ${message.guild.members.random().displayName}`)
    console.log("/Draw command " + message.author.username + " Used by.")
    message.delete();
    message.channel.sendEmbed(embedçekiliş);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Lottery', 'Draw', 'Lottery'],
    permLevel: 0
};

exports.help = {
    name: 'Loterie',
    description: '➺ Its a lottery, you have to do exactly what you do and really..',
    usage: 'lottery'
};