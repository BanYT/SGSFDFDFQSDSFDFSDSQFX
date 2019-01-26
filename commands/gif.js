 const Discord = require("discord.js"); // Discord Module Required
 
exports.run = async (client, message, args1) => { 
  var replys = [
    "https://media.giphy.com/media/1fl3uoVMsx9mFkECau/giphy.gif", 
    "https://media.giphy.com/media/1fl3uoVMsx9mFkECau/giphy.gif",

          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(gif)
          .setFooter('Trump')

  
  message.channel.send(embed)
  console.log("Trump gif succesfully send")}
  
  module.exports.help = {
	name: "gif",
	alias: "g"
}
