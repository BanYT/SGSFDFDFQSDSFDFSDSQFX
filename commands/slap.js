let Discord = require('discord.js');

exports.run = async (client, message, args1) => { 
	
let memberToFind = message.mentions.members.first();
  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.slap @User``');
  }
	
var replys = [
    "https://media.giphy.com/media/1xNmkIs9lNp22cy6Id/giphy.gif",
          "https://media.giphy.com/media/6mlXAMb6jWgo9h07Dt/giphy.gif",
          "https://media.giphy.com/media/9RWepdYmKpq494wwht/giphy.gif",
          "https://media.giphy.com/media/7Ec2BG3OUqhqdGzUkd/giphy.gif",
          ];
	
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
	  .setImage(gif)
	  .setColor("RANDOM")
	  .setTitle(`${message.member.displayName} Slapps  ${message.mentions.members.first().displayName}`)
	  
    message.channel.send(embed)
}

module.exports.help = {
	name: "slap",
	alias: "s"
}
