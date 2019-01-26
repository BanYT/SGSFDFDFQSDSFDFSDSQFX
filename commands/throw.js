let Discord = require('discord.js');

exports.run = (client, message) => {

let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.throw @User``');
  }
	
message.reply(`***throws ${message.mentions.members.first()}***`)

}

module.exports.help = {
	name: "throw",
	alias: "THROW"
}
