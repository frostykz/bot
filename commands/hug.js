const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("➺ You can't hug nobody.")
      let user = message.guild.member(message.mentions.users.first());
        snekfetch.get('https://nekos.life/api/hug')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, you got a hug from **${message.author.tag}** !`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
   
module.exports.help = {
name: "hug"
}