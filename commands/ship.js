const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
        let user1 = args[0];
        let user2 = args.slice(1).join(' ');
        if (!user1) return message.channel.send("➺ You did not select the first item to ship.")
        if (!user2) return message.channel.send("➺ You did not select the second item to ship.")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship <= 50) {
                    const badmatch = new Discord.RichEmbed()
                    .setColor('363940')
                    .setTitle(user1 + " and " + user2 + " do not match very well")
                    .setDescription(":broken_heart: " + ship + "%");
                    message.channel.send(badmatch);
           } else if (ship === 100) {
                const perfectmatch = new Discord.RichEmbed()
                    .setColor('363940')
                    .setTitle(user1 + " and " + user2 + " are meant for eachother")
                    .setDescription(":heart: " + ship + "%");
                    message.channel.send(perfectmatch);
           } else {
               const match = new Discord.RichEmbed()
                    .setColor('363940')
                    .setTitle(user1 + " and " + user2 + " match very well.")
                    .setDescription(":heart: " + ship + "%");
                    message.channel.send(match);
            }
}

module.exports.help = {
name: "ship"
}