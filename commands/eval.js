const Discord = require("discord.js");
const db = require("quick.db");
const ytdl = require("ytdl-core")


exports.run = async (bot, message, args, color, prefix) => {
    if (message.author.id !== '659038301331783680' && message.author.id !== '659038301331783680' && message.author.id !== '659038301331783680' && message.author.id !== '659038301331783680') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval')
        .setColor('363940')
        .addField(':inbox_tray: ➺ Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: ➺ Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.help = {
    name: 'eval',
    category: 'OWNER BOT'
}