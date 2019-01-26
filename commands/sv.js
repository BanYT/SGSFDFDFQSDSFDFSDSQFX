let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", message.guild.id)
  .addField("Owner Name", message.guild.owner)
  .addField("Owner Id", message.guild.ownerID)
  .addField("Roles Count", message.guild.roles.size)
  .addField("Region", message.guild.region)
.setThumbnail(message.guild.iconURL)
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
message.channel.send(embed)
message.react('✅');

}
module.exports.help = {
	name: "i sv",
}
