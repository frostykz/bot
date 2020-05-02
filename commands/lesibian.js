const puppy = require('random-puppy')
const Discord = require('discord.js')

module.exports.run = (bot, message, args, discord) => {
  let keywords = [
    "lesbi",
    "lesbian",
    "lesbians"
  ]
  
  var result = keywords[Math.floor(Math.random()*keywords.length)]
  
  puppy(result).then(url => {
    let embed = new Discord.RichEmbed()
    .setTitle("➺ Here, take some lesbians.")
    .setImage(url)
    .setColor('363940')
    .setTimestamp()
    .setFooter(`${message.author.tag}`)
    .setURL(url);
    message.channel.send({embed: embed})
  })
}

module.exports.help = {
  name: "lesbian"
}