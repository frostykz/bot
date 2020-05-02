const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
  var choice = args[0];
  if (choice == "Papers" || choice == "p" || choice == "Papers") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "Papers";
    } else if (numb => 66) {
      var choice2 = "Rock";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "Scissors";
    }
    if (choice2 == "➺ Scissors") {
      var response = "➺ I choose **Scissors**! I won!"
    } else if (choice2 == "➺ Papers") {
      var response = "➺ I choose **Papers**! Equality!"
    } else if (choice2 == "➺ Rock"){
      var response = "➺ I choose **Rock**! I lost!"
    }
    message.channel.send(response);
  } else if (choice == "➺ Rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "➺ Papers";
    } else if (numb => 66) {
      var choice2 = "➺ Rock";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "➺ Scissors";
    }
    if (choice2 == "➺ Papers") {
      var response = "➺ I choose **Papers**! I won"
    } else if (choice2 == "➺ Rock") {
      var response = "➺ I choose **Rock**! Equality!"
    } else if (choice2 == "➺ Scissors"){
      var response = "➺ I choose **Scissors**! I lost!"
    }
    message.channel.send(response);
  } else if (choice == "➺ Scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "➺ Papers";
    } else if (numb => 66) {
      var choice2 = "➺ Rock";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "➺ Scissors";
    }
    if (choice2 == "➺ Rock") {
      var response = "➺ I choose **Rock**! I won!"
    } else if (choice2 == "➺ Scissors") {
      var response = "➺ I choose **Scissors**! Equality!"
    } else if (choice2 == "Papers"){
      var response = "➺ I choose **Papers**! I lost!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Use the command: .,rps <Rock> | <Papers> | <Scissors>`);
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rps"],
  permLevel: "User"
};
exports.help = {
	name: "rps",
	description: 'Play Rock Papers Scissors with the bot.'
}