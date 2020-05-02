const Discord = require("discord.js");
const bot = new Discord.Client();


exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("➺ You do no have access.")
   
        var userz = message.guild.members.array();
        const roletogive = args.join(" ")
        
        let subscriberRole = client.guilds.get(message.guild.id).roles.find(r => r.name == roletogive);
        if (!subscriberRole) return message.channel.send("➺ I can not find the role " + roletogive + " ");

      
            
                userz.forEach(u => {
                    u.addRole(subscriberRole)
                })
                message.channel.send("➺ I have given the role " + roletogive + " to all members.")
            
      

        
    }

    

module.exports.help = {
  name: "roleall"
}


