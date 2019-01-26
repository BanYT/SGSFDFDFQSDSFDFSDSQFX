const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**You Can't Use This Command Kiddo! Because Your Missing Administrator Permission**");
  if(!args[0]) return message.channel.send("**Please Specify A Number Of Messages You Want To Delete !**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**Deleting ${args[0]} messages... Finished ! You Just Deleted ${args[0]} Messages.** `).then(msg => msg.delete(2000));
message.react('✅');
  });
}

module.exports.help = {
  name: "clear"
}
