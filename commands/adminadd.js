const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 
 let role = message.guild.roles.find(role => role.name === 'Administrator');
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**You Can't Use This Command Kiddo! Because Your Missing Administrator Permission**");
    member.addRole(role);
    message.reply(`:inbox_tray: **Added __Administrator__ to || ${message.mentions.members.first().displayName} || Successfully** :thumbsup::skin-tone-3:`)
    }
    
    module.exports.help = {
  name: "addadmin"
}
