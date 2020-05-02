const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('top!'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("Time Of Power Help Centrer [Prefix top!]")
   // .addField("Economy Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell` `roulette` `slots` `storeinfo [item]`")
    .addField("Fun Commands", "`8ball` `slots` `roll` `gay` `grass` `coinflip` `lottery` `smoke` `cat` `yomamma` `weather` `videoinfo` `today` `textflip` `roblox` `reverse` `roast` `reminder` `lesibian` `kiss` `getchannels` `hug` `emojify` `dog` `duck` `compliment`")
    .addField("User Commmands", "`serverinfo` `userinfo` `avatar` `help` `suggest` `daily` `uptime` `ping` `youtube` `ship` `sexyrate` `rr` `roleinfo` `question` `numfact` `meme` `motivate` `membercount` `knockknock` `fmk` `info` `emojis` `embed` `docs` `createinvite`")
    .addField("Moderation Commands", "`kick` `mute` `ban` `purge` `say` `unban` `lockdown` `poll` `roleall` `hackban` `embedsay`")
    .addField("Level Commands", "`level`")
    .addField("Developer Commands", "`exec` `eval` `setstatus` `restartcommand`")
    .setColor("#363940")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help"
}