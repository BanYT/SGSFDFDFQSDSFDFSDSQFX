const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send("you dont have a permisions").then(x=>x.delete(3000))
message.guild.members.map(x=>x.sendMessage(args.join(" ")))

  }

module.exports.help = {
  name:"an"
}
