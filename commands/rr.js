const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    var roulette = [':gun: Pow ! You are dead, try again ?',':gun: Luckily for yourself, **You Survivied** ! Would you like to test your luck again ?',':gun: Oh damn, it didnt shoot ! Or is that a good thing ? (Try Again ?)'];
    message.channel.send(roulette[Math.floor(Math.random () * roulette.length)]);
  }
   
module.exports.help = {
name: "rr"
}