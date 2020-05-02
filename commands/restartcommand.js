const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== '659038301331783680' && message.author.id !== '' && message.author.id !== "638758874567933953") return message.reply("This command is **Owner only**.")

  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];

    message.delete()
    return message.reply(`:currency_exchange: |➺ Recharge **successfully**! **${args[0]}.js**`)
     }catch(e){
     return message.reply(`Unable to restart ${args[0]}`)
     }
}; 
module.exports.help = {
name: "restartcommand"
}