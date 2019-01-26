const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Can't Use This Command Kiddo! Because Your Missing Administrator Permission");
    if(args[0] == "help"){
      message.reply("Usage: .kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**I Can't Find This User ! Mention The User To Be Able To Use This Command**");
    let kReason = args.slice(1).join(" ") || "None";
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("**This User Cant Be Kicked Because He Had A Role Highler Than You** ``/OR/`` **He Is The Owner Of This Server** ``/OR/`` **He Had Administrator Permission**");

  
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~~Kick~~")
    .setColor("RANDOM")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

 let kickChannel = message.guild.channels.find(`name`, "log");
    if(!kickChannel) return message.channel.send("**Can't find log channel. Please Create A New Channel With log Name To Be Able To Use This Command**");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    message.react('⚒');

}


module.exports.help = {
	name: "kick",
}
