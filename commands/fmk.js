const Discord = require('discord.js');

// Make sure you use exports.run when you have a command handler!
module.exports.run = async (bot, message, args) => {

    let replies = ['Marry :ring:', 'Kill :bomb:', 'Fuck :ok_hand:'];
    let result = Math.floor(Math.random() * replies.length);

    let makifuembed = new Discord.RichEmbed()

        .setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)
        .setColor('363940')
        .addField('You choosed:', replies[result])
        .setFooter('Fuck, Marry, Kill !', bot.user.displayAvatarURL)
        .setTimestamp();

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, please mention a user you wanna choose !`).then(msg => {
        msg.delete(3000)
    });

    message.channel.send(makifuembed);

}
// Make sure you got exports.help || otherwise the command won't work!
module.exports.help = {
    name: "fmk",

    description: "The command fmk is based on the game: Fuck, Marry kill",

    usage: "$fmk <user>"
}