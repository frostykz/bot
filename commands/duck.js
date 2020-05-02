const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`https://random-d.uk/api/v1/random?type=jpg`);

    let duckembed = new Discord.RichEmbed()
    .setColor("363940")
    .setTitle("Duck :duck:")
    .setImage(body.url);

    message.channel.send(duckembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "duck"
}