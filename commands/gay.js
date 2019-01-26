const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
let memberToFind = message.mentions.members.first();
    let gay = Math.round(Math.random() * 100);

    if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.gay @User``');
  }
    
    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.mentions.members.first().displayName} is ${gay}% gay!** :gay_pride_flag:`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};
