const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
message.channel.send(uptime)
}
module.exports.help = {
  name: "up"
}
