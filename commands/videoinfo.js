const ytdl = require("ytdl-core");
const discord = require("discord.js");

exports.run = async(bot, message, args, ops) => {
  if (!args[0])
  return message.reply("➺ Sorry you need to send a url.");

  let validate = await ytdl.validateURL(args[0]);

  if (!validate) return message.reply("➺ Please send a **vaild** url.");

  let info = await ytdl.getInfo(args[0]);
  let color = '363940'
  let maininfoembed = new discord.RichEmbed()
  .setColor(color)
  .setTitle(info.title)
  .setThumbnail(info.thumbnail_url)
  .setAuthor(info.author.name)
  .setTimestamp(info.published)
  .addField('➺ **Video Link**:', info.video_url)
  .addField('➺ **View Count**:', `${info.player_response.videoDetails.view_count}`)
  .addField('➺ **KeyWords**:', `${info.player_response.videoDetails.keywords}`)
  let description = new discord.RichEmbed()
  .setColor(color)
  .setImage(info.thumbnail_url)
  .setDescription(info.description)
  message.channel.send(maininfoembed)
  message.channel.send(description)
}

exports.help = {
  name: 'videoinfo',
  aliases: [ 'vi', 'video', 'vidinfo' ]
}