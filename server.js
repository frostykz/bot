const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const { prefix } = require('./config.json');
const TOKEN = "NzAzMjA0ODc1NDkxODY4NzYz.XqL1Zg.iW9oicaZX5FISuVoqQeGtjh1tug";
const fs = require('fs');
const ms = require('ms');
const client = new Discord.Client({disableEveryone: false});
const config = require("./config.json");
const db = require("quick.db")
client.aliases = new Discord.Collection();
client.helps = new Discord.Collection();
client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.name, props); 
    });
});

client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `prea smk pt tn kid`,
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "streaming"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});

  //Anti invite links
client.on('message', async message => { //whenever a message is sent
  if(message.author.id === client.user.id) return;
      if(message.channel.type === "dm") return; 
    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
        if(message.member.hasPermission("ADMINISTRATOR")) return;
      message.delete() //delete the message
        .then(message.channel.send(' **SYSTEM**: Publicity are not allowed to this server !'))
    }
    if (message.content.includes('invite.gg/')) {
        if (message.member.hasPermission("ADMINISTRATOR")) return;
        message.delete()
      .then(message.channel.send('**SYSTEM**: Publicity are not allowed to this server !'))
    }
  })
  //Anti link done

client.on('message', async message => {
  if(message.content === 'absen')  require('./commands/absen.js')(message, args)
	if (message.author.bot) return undefined;
  if (message.channel.type === "dm") return; 
	let prefix = config.prefix;
	if (!message.content.startsWith(prefix)) return undefined;
 let messageArray = message.content.split(" ");
  let msg = message.content.toLowerCase();
	let command = message.content.toLowerCase().split(' ')[0];
  command = command.slice(prefix.length);
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = `${args.shift().toLowerCase()}`;
	
  	/*try {
    if (command == 'h') command == 'help';
    
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} using command ${cmd}`);
	}*/
    try {
  if (command == 'h') command = 'help';
    let commands = require(`./commands/${cmd}.js`);
    commands.run (client, message, args);
  } catch (e) {
    console.log(e.stack)
  } finally {
    console.log(`${message.author.tag} foloseste comanda \`${cmd}.js\``)
  }
    
  let commands = require(`./commands/${cmd}.js`);
 
});


  client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase() === 'top!tag')
		message.channel.send("<:PepeYikes:703196592034938941> `-` Tag-ul nostru este: **ﾉᴛᴏᴘ**" + "`.`");

 


});

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase() === 'top!tag')
		message.channel.send("ﾉᴛᴏᴘ");
});

//^^ INI UNTUK COMMAND HANDLER
const express = require('express');
const http = require('http');
const app = express();

// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
	if(message.content.toLowerCase() === 'wlcc')		
message.channel.send("**▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂\n            <:1028_MCgoldenapple:703205220842340382> Bine ai venit pe Time Of Power <:1028_MCgoldenapple:703205220842340382>\n<:543607981175209984:703213499035418634> Daca ai vreo problema te rugam sa contactezi o persoana din staff <:543607981175209984:703213499035418634>\n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂\n            <:blobsaluteban:703152140230721557> Staff-ul va ureaza bun venit pe server!<:blobsaluteban:703152140230721557>**");


});
client.on("guildMemberAdd", member =>{
    const embed = {
        "title": "__**UN NOU MEMBRU A INTRAT**__",
        "description": `<:669566865667784734:703248876949471333> \`-\` ${member.user} A intrat pe __***${member.guild}***__.\n<:701542449448878140:703213072084500542> \`-\` Daca vrei poti sa iti pui tagul nostru **ﾉᴛᴏᴘ**.`,
        "color": 363940,

        "author" : {
            "name" : `${member.user.username}`,
            "icon_url" : `${member.user.avatarURL}`
        },
        "thumbnail" : {
            "url" : `${member.user.avatarURL}`
        },
        "footer" : {
            "text" : `${member.guild.name}`
        },
        "timestamp" : new Date(),
        };

    var channel = member.guild.channels.find("id", "702781064313176064");
    channel.send({embed});
      
});

client.login(TOKEN);

client.login("NzAzMjA0ODc1NDkxODY4NzYz.XqL1Zg.iW9oicaZX5FISuVoqQeGtjh1tug");