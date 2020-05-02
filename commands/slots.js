const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permission to send a message here!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("➺ You won!", aicon)
            .setTitle(':slot_machine:Sloturi:slot_machine:')
            .addField('➺ Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#363940");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('➺ You lost!', aicon)
            .setTitle(':slot_machine:Sloturi:slot_machine:')
            .addField('➺ Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#363940");
        message.channel.send(embed);
    }

}


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slots',
    description: 'Slot Machine',
    usage: 'slots'
}