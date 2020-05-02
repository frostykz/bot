const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!message.guild.member(message.author.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do no have access,");  
  const deleteCount = parseInt(args[0]);
    
    if(!deleteCount || deleteCount < 1 || deleteCount > 1000)
      return message.channel.send("➺ Sorry, chose a number between 1 and 1000.");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched).then(m => m.channel.send('➺ Successfully, ${fetched} messages has been deleted.'))
      .catch(error => message.channel.send('➺ Successfully, messages has been deleted.'));
  
}
module.exports.help = {
    name: "purge"
};