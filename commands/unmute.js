exports.run = async(bot, message, args)  => {  
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You dont have acces.")
      if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.channel.send(" You dont have acces.")
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if (!member) return message.channel.send(`Unable to find user ! Mention the user. Write: **$unmute <user> <reason>** `)
      
      let mrole = message.guild.roles.find(`Muted`, "Muted")
      message.member.removeRole(mrole);
  
      message.channel.send(`${member}, You got unmute.`);
    }
   
  exports.help = {
   name: "unmute"
  }
  