let Discord = require('discord.js');

exports.run = (client, message, args) => {
let cmd = message.content.split(' ').slice(1,2).join(' ');    

    
  let memberToFind = message.mentions.members.first();
  let user = message.author;
  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``whois @User``');
  }

  var embed = new Discord.RichEmbed()
  .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
  .setImage(memberToFind.AvatarURL)
  .addField("Member ID:", memberToFind.id, true)
  .addField("Status", message.author.presence.status)
  .addField('Account Created', memberToFind.user.createdAt, true)
  .addField('Joined This Server', message.guild.members.get(memberToFind.id).joinedAt, true)
 .addField("Roles", memberToFind.roles.map(r=>'**[**`'+ r.name +'`**]**').join('`,` '))
  .setColor('RANDOM')
  message.channel.send(embed);
  message.react("✅");
}    
    
module.exports.help = {
    name: "whois",
    alias: "i"
}
