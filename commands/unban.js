const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '``unban`` **You Cannot Use This Command Your Missing Administrator Permission** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'log');//mod-log channel name. change for you
  if (!modlog) return 
  var embed = new Discord.RichEmbed()
  .setTitle("Error")
  .addField("❌", '**I Cant Found A Channel With** ``log`` **Name ! Make A Channel With** ``log`` **Name To Be Able To Use This Command** ');
	
  message.channel.send(embed)
  
  if (!user) return 
   var embed = new Discord.RichEmbed()
   .setTitle("Error")
  .setDescription('❌ **You Must Type The **__ID__** **Of The Person You Want To Unban**')
  message.channel.send(embed)
  message.guild.unban(user);
  if (reason.length < 1) return 
  
  var embed = new Discord.RichEmbed()
  .setTitle("Error")
  .setDescription('**You Did Not Spetify The Reason For The Unban**');//don't forget unban reason
  message.channel.send(embed)

  var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('💢 Action 💢', 'Unban')
    .addField('User Unbanned', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason Of The Unban', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
message.react("⚒")
};

module.exports.help = {
	name: "unban",
	alias: "un"
}
