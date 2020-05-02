const prefix = "$"
exports.run = async (client, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.channel.send('**Go, shoot on the nose**').then(async msg => {
        setTimeout(() => {
            msg.edit('🌿');
        }, 500);
        setTimeout(() => {
            msg.edit('😤🌿');
        }, 1000);
        setTimeout(() => {
            msg.edit('😤😤🌿');
        }, 1500);
        setTimeout(() => {
            msg.edit('😤😤😤🌿');
        }, 2000);
        setTimeout(() => {
            msg.edit('😤😤🌿');
        }, 2500);
        setTimeout(() => {
            msg.edit('😤🌿');
        }, 3000);
      setTimeout(() => {
            msg.edit('😤😤🌿');
        }, 3500);
      setTimeout(() => {
            msg.edit('😤😤😤🌿');
        }, 4000);
  setTimeout(() => {
            msg.edit('😤😤🌿');
        }, 4500);
   setTimeout(() => {
            msg.edit('😤🌿');
        }, 5000);
        setTimeout(() => {
           msg.edit('🌿');
        }, 5500);
  setTimeout(() => {
           msg.edit('');
        }, 5700);
            msg.edit(`**Be careful the guard can come!**`);
        }, 6000);
    
}
;
;

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "grass",
    category: "Fun",
    description: "Fum în fiecare zi :dab:",
    usage: "grass"
};