exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  
  let modlog = client.channels.find('name', 'logs');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(" You do no have acces!");
  if (reason.length < 1) reason = ' No reason supplied.';
  if (!user) return message.channel.send('➺ You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user, {reason: reason.length < 1 ? ' No reason supplied.': reason}).catch(e =>{
    if(e){
      return message.channel.send(`➺ ${client.users.get(`${args[0]}`).username} ,unbanned  from **GodsZone**.`);
    }
    message.channel.send(`${client.users.get(`${args[0]}`).username}#${client.users.get(`${args[0]}`).discriminator} has been unbanned`);
  });;

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'Wrong command! **Try** ➺ $unban (mention) (reason)'
};
