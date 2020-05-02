const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("➺ You dont have acces.");
    // Check for input
    if (!args[0]) return message.channel.send('➺ Invalid command, write: $poll <Question> ');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#363940") //To change color do .setcolor("#fffff")
        .setFooter('➺ React to the vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by: ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
    name: "poll"

}