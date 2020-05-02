const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
    if (!args.join(" ")) return message.reply("➺ Please tell me who/what to rate")

    let ratings = ["0", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐",  "⭐⭐⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐"];

    let result = Math.floor((Math.random() * ratings.length));
    let user = message.mentions.users.first();
 
    let rateEmbed = new Discord.RichEmbed()
 
    .setAuthor(message.author.tag)
    .setColor("363940")
    .setThumbnail(message.author.avatarURL)
    .addField("Rate:", args.join(' '))
    .addField("Rating:", ratings[result]);
 
    message.channel.send(rateEmbed)
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'rate'
}