const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**You Can't Use This Command Kiddo! Because Your Missing Administrator Permission**");
  if(args[0] == "help"){
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**I Can't Find This User ! Mention The User To Be Able To Use This Command**");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("**Please Specify a role! === Put The Role Name But Don't Mention It Just The Name !**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**i Cant Find This Role.. Try An Other Name Or Check If You Wrote The Correct Name Of The Role**");

  if(rMember.roles.has(gRole.id)) return message.reply("**This Member Had Already This Role So He Don't Need It From You** ");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`**Congratulation You Got A New Special Role Enjoy It ! This Is Your Role** ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`**Congratulation to** ``<@${rMember.id}>``, **He Got A New Special Role**  ``${gRole.name}``**. I Sent Him A Full Congrat Letter**`)
    message.react('✅')
  }
}

module.exports.help = {
  name: "addrole"
}
