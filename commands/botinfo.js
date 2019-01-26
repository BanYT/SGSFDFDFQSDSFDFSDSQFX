const Discord = require("discord.js");

        module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Bot Information**")
    .setDescription("**Bot's Informations**")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("**• Bot Name**", bot.user.username)
    .addField("**• Bot's ID**", "**517276995269296129**")
    .addField(":prince:**• Bot's Owner**:prince: ", "***Ban#9153***")
    .addField(":champagne: **• Ping** :ping_pong:", `**${Math.round(bot.ping)}Ms**`)
    .addField(":calendar_spiral:**• Created On**:calendar_spiral:", "**Wed Nov 28 2018 09:54:06 GMT+0000 (Coordinated Universal Time)**")
    .addField("**• Mem Usage**", `**189 MB / 1985.75 MB**`)
    .addField(":medal:**• Servers**:medal:", `**${bot.guilds.size}**`)
    .addField(":busts_in_silhouette:**• Members**:busts_in_silhouette:", `**${bot.users.size}**`)
    .addField(":video_game:**• Commands**:video_game:", `**${bot.commands.size}**`)
    .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")

    message.channel.send(botembed);
}
module.exports.help = {
  name:"botinfo"
}
