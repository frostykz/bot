const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Error")
        let embed = new Discord.RichEmbed()
	
    .setColor("363940")
    .setTimestamp()
    .addField(' **Action**:', 'Searching on google')
	.addField(" **Word**:", `${args.slice(0).join(' ')}`)
	.addField(' **Link**:', `${link}`)
	.setFooter(" **Your avatar**", message.author.avatarURL);
          
	message.channel.send(embed);
	message.author.send(`You searched ${link} in ${ message.guild.name}`);
  
}



module.exports.help = {
    name: "google",
    aliases: ["g"]
}