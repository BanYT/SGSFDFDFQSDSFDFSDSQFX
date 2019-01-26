let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle('**Total Members**')
  .addField("**Total Members In This Server Are**", message.guild.memberCount)
message.channel.send(embed)
message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "members",
	alias: "m"
}
