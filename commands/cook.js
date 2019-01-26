const Discord = require('discord.js');
const prefix = "."
exports.run = async (client, message, level) => {
	
	let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.slap @User``');
  }

    if (!message.content.startsWith(prefix)) return;

    message.reply(`***Is Cooking ${message.author} .*** :smiley:`).then(async msg => {
	    setTimeout(() => {
            msg.edit(`***Is Cooking ${message.author} ..*** :smiley:`);
        }, 1000);
	    setTimeout(() => {
            msg.edit(`***Is Cooking ${message.author} ...*** :smiley:`);
        }, 1500);
	    setTimeout(() => {
            msg.edit(`***Is Cooking ${message.author} ....*** :smiley:`);
        }, 2000);
	    setTimeout(() => {
            msg.edit(`***Is Cooking ${message.author} .....*** :smiley:`);
        }, 3000);
	    setTimeout(() => {
            msg.edit(`:shallow_pan_of_food: ***... ?*** :frowning: :droplet:`);
        }, 4000);
    });
		
}
module.exports.help = {
	name: "cook",
	alias: "c",
  }
