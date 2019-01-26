const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**You Can't Use This Command Kiddo! Because Your Missing Administrator Permission**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**I Can't Find This User ! Mention The User To Be Able To Use This Command**");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("**Please Specify a role! === Put The Role Name But Don't Mention It Just The Name !**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**i Cant Find This Role.. Try An Other Name Or Check If You Wrote The Correct Name Of The Role**");

  if(!rMember.roles.has(gRole.id)) return message.reply("**This Member Doest Have This Role **");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`**Noooooo, you lost the** ${gRole.name} **role. Rip... Work Hard...Maybe You Will Get It Back**`)
  }catch(e){
    message.channel.send(`**RIP to** <@${rMember.id}>**,removed** ${gRole.name} **from Him. i Sent Him A Full Report**`)
  }
}

module.exports.help = {
  name: "removerole"

}
