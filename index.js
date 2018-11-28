const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "";

bot.on('ready', () => {
console.log('IM READY !')
});

bot.on('message', msg => {
 if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);
 
if (msg.content === prefix + ".help"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (command === '.help 2') {
  msg.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 2**')
  .addField("**Moderation**","``Moderation : .send / .dm / dm / send === are Commands To Send A Message To The Member You Mentioned To Notify Him For A Dangerous Things Like Hes spam in server etc... [If Ban Got Any Report About A Moderator/owner Of A Server Spamming Hes Members Dms He Will Delete Me From The Current Server So Be Carefull With using This Command ! ]``")
  .addField("**You Can Also Use Some Commands without Typing All of The Command**","``Example>>`` **.p === ping command \ whois/info/i === To See A The User Info \ count === to see how many servers I'm in them ! \ serverinfo/.i sv === to See The Server Info** ")
  .addField("**.help 3**","**Interesting !?**")
  .setColor("RANDOM")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (command === '.help 3') {
  msg.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 3**')
  .addField("**Moderation**","``Moderation : .help ban/help ban \.help kick/help kick === are commands to see how to use Kick/ban commands``")
  .addField('**other Help**','``help ping/.help ping \.help cook/help cook \.help heat/help heat \.help slap/help slap \.help clap/help clap``')
  .setColor("RANDOM")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (command === 'help 2') {
  msg.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 2**')
  .addField("**Moderation**","``Moderation : .send / .dm / dm / send === are Commands To Send A Message To The Member You Mentioned To Notify Him For A Dangerous Things Like Hes spam in server etc... [If Ban Got Any Report About A Moderator/owner Of A Server Spamming Hes Members Dms He Will Delete Me From The Current Server So Be Carefull With using This Command ! ]``")
  .addField("**You Can Also Use Some Commands without Typing All of The Command**","``Example>>`` **.p === ping command \ whois/info/i === To See A The User Info \ count === to see how many servers I'm in them ! \ serverinfo/.i sv === to See The Server Info** ")
  .addField("**.help 3**","**Interesting !?**")
  .setColor("RANDOM")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (command === 'help 3') {
  msg.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 3**')
  .addField("**Moderation**","``Moderation : .help ban/help ban \.help kick/help kick === are commands to see how to use Kick/ban commands``")
  .addField('**other Help**','``help ping/.help ping \.help cook/help cook \.help heat/help heat \.help slap/help slap \.help clap/help clap``')
  .setColor("RANDOM")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".HELP"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".HeLP"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".HelP"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".Help"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".helP"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".HeLp"){
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**xBot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS . AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **.invite**``")
  .addField("**Moderation**","Kick , Ban , Warn , Send , Dm  Are A Seriously Commands ! ")
  .addField('**THERE IS ALSO ANTI BAD WORDS BLOCKED**')
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**There Are More Commands Like** ``:`` **.set prefix** ``/`` **.set mutedrole** ``/`` **...**")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/ax6AzfH`` ", true)
  .addField("**help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "support"){
  var embed = new Discord.RichEmbed()
  .setTitle("**Need Support ?**")
  .setDescription("**You Can Join The Support Server https://discord.gg/ax6AzfH Or You Can Only say help to see all my commands**")
  .setColor("RANDOM")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".support"){
  var embed = new Discord.RichEmbed()
  .setTitle("**Need Support ?**")
  .setDescription("**You Can Join The Support Server https://discord.gg/ax6AzfH Or You Can Only say help to see all my commands**")
  .setColor("RANDOM")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "youtube"){
  var embed = new Discord.RichEmbed()
  .setTitle("**iHaxBan Youtube Channel**")
  .setDescription("**Hi And Welcome Im xBot The Bot Of Ban Need An Awesome Role ? Just Subscribe To Him With This Link And Get @Subscriber role Its Easy Right ? https://www.youtube.com/channel/UC4nzXiKezdyEHgJaBYHrK6Q?view_as=subscriber** **You Can Also Learn How to Code A Bot Like Me By Watching Ban's Videos !**")
  .setColor("0x#DF0101")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "prefix"){
  var embed = new Discord.RichEmbed()
  .setTitle("**xBot Prefix**")
  .setDescription("**My Prefix Is . \ In Some Commands i Don't Have A Prefix You Just Need To Type My Command ! **")
  .setColor("0x#08088A")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".prefix"){
  var embed = new Discord.RichEmbed()
  .setTitle("**xBot Prefix**")
  .setDescription("**My Prefix Is . \ In Some Commands i Don't Have A Prefix You Just Need To Type My Command ! **")
  .setColor("0x#08088A")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "game"){
  var embed = new Discord.RichEmbed()
  .setTitle("**Our Community Games & Events**")
  .setDescription("**Hey Hello ! Welcome Our Community Our Games Are http://starve.io/ - https://www.scrible.com/ - https://www.lordz.io/ - https://moomoo.io/ - there more games ask Ban about them (The Leader and The Owner Of me)**")
  .setColor("0x#F8FC05")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content.startsWith(prefix + "serverinfo")) {
  let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Server Info**')
  .addField("Id", msg.guild.id)
  .addField("Owner", msg.guild.owner)
  .addField("Owner Id", msg.guild.ownerID)
  .addField("Roles", msg.guild.roles.size)
  .addField("Region", msg.guild.region)
.setThumbnail(msg.guild.iconURL)
msg.channel.send(embed)
msg.react('👍');
}
if (msg.content === prefix + "invite"){
  var embed = new Discord.RichEmbed()
  .setTitle("**Want To Me In Your Server ? Awesome !**")
  .setDescription("**You Can Find Me With This Link https://discordapp.com/api/oauth2/authorize?client_id=508255267310403604&permissions=2146958839&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D508255267310403604%26permissions%3D2146958839%26redirect_uri%3Dhttps%253A%252F%252Fdiscordapp.com%252Fapi%252Foauth2%252Fauthorize%253Fcli&response_type=code&scope=email%20bot%20messages.read**")
  .setColor("0x#220A29")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".invite"){
  var embed = new Discord.RichEmbed()
  .setTitle("**Want To Me In Your Server ? Awesome !**")
  .setDescription("**You Can Find Me With This Link https://discordapp.com/api/oauth2/authorize?client_id=508255267310403604&permissions=2146958839&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D508255267310403604%26permissions%3D2146958839%26redirect_uri%3Dhttps%253A%252F%252Fdiscordapp.com%252Fapi%252Foauth2%252Fauthorize%253Fcli&response_type=code&scope=email%20bot%20messages.read**")
  .setColor("0x#220A29")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From Ban For Using Hes Bot ")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content.startsWith(prefix + "i sv")) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", msg.guild.id)
  .addField("Owner", msg.guild.owner)
  .addField("Owner Id", msg.guild.ownerID)
  .addField("Roles", msg.guild.roles.size)
  .addField("Region", msg.guild.region)
.setThumbnail(msg.guild.iconURL)
msg.channel.send(embed)
msg.react('👍');
}
if (msg.content.startsWith(prefix + "i server")) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", msg.guild.id)
  .addField("Owner", msg.guild.owner)
  .addField("Owner Id", msg.guild.ownerID)
  .addField("Roles", msg.guild.roles.size)
  .addField("Region", msg.guild.region)
.setThumbnail(msg.guild.iconURL)
msg.channel.send(embed)
msg.react('👍');
}
if (msg.content.startsWith(prefix + ".i sv")) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", msg.guild.id)
  .addField("Owner", msg.guild.owner)
  .addField("Owner Id", msg.guild.ownerID)
  .addField("Roles", msg.guild.roles.size)
  .addField("Region", msg.guild.region)
.setThumbnail(msg.guild.iconURL)
msg.channel.send(embed)
msg.react('👍');
}
if (msg.content.startsWith(prefix + ".i server")) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", msg.guild.id)
  .addField("Owner", msg.guild.owner)
  .addField("Owner Id", msg.guild.ownerID)
  .addField("Roles", msg.guild.roles.size)
  .addField("Region", msg.guild.region)
.setThumbnail(msg.guild.iconURL)
msg.channel.send(embed)
msg.react('👍');
}
if (msg.content === prefix + ".help ban"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Ban Command**")
  .setDescription("**Hi You Need Help With Ban Command ?**")
  .addField("***BAN***","**Help With Ban Command : ban + @user** ``OR`` **b + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help kick"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Kick Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**kick**","**Help With Kick Command : kick + @user*** ``OR`` **k + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help slap"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Slap Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**Slap**","**Help With Slap Command : Slap + @user*** ``OR`` **s + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help clap"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Clap Command**")
  .setDescription("``Hi You Need Help With clap Command ?``")
  .addField("**clap**","**Help With clap Command : clap + @user*** ``OR`` **c + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help heat"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With heat Command**")
  .setDescription("``Hi You Need Help With heat Command ?``")
  .addField("**heat**","**Help With Heat Command : heat + @user*** ``OR`` **h + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help cook"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With cook Command**")
  .setDescription("``Hi You Need Help With cook Command ?``")
  .addField("**cook**","**Help With cook Command : cook + @user*** ``OR`` **C + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + ".help ping"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With ping Command**")
  .setDescription("``Hi You Need Help With ping Command ?``")
  .addField("**ping**","**Help With ping Command : ping*** ``OR`` **p** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help ban"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Ban Command**")
  .setDescription("**Hi You Need Help With Ban Command ?**")
  .addField("***BAN***","**Help With Ban Command : ban + @user** ``OR`` **b + @user** ", true)
  .setColor("0x#37FC07")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help kick"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Kick Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**kick**","**Help With Kick Command : kick + @user*** ``OR`` **k + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help slap"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Slap Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**Slap**","**Help With Slap Command : Slap + @user*** ``OR`` **s + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help clap"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Clap Command**")
  .setDescription("``Hi You Need Help With clap Command ?``")
  .addField("**clap**","**Help With clap Command : clap + @user*** ``OR`` **c + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help heat"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With heat Command**")
  .setDescription("``Hi You Need Help With heat Command ?``")
  .addField("**heat**","**Help With Heat Command : heat + @user*** ``OR`` **h + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help cook"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With cook Command**")
  .setDescription("``Hi You Need Help With cook Command ?``")
  .addField("**cook**","**Help With cook Command : cook + @user*** ``OR`` **C + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
if (msg.content === prefix + "help ping"){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With ping Command**")
  .setDescription("``Hi You Need Help With ping Command ?``")
  .addField("**ping**","**Help With ping Command : ping*** ``OR`` **p** ", true)
  .setColor('RANDOM')
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot")
  msg.channel.sendEmbed(embed);
  msg.react('👍');
}
module.exports.run = (bot, message, args) => {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("``You Don't Have Permissions To Manage Messages``**You Need Administrator Role** ``OR``**XXXXXXXX Role**");
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To USE THIS COMMAND !**')
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
  msg.react('👍');
}
if (command === 'say') {
  let say = args.join(' '); // space
  msg.delete(); // deletes the content
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To use This Command !!!!!**')
  msg.channel.send(say);
}

if (msg.content === prefix + ".ping"){
  msg.delete();
  msg.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`${msg.author}:ping_pong: Pong!  (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
}
if (msg.content === prefix + "p"){
  msg.delete();
  msg.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`${msg.author}:ping_pong: Pong!  (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  msg.react('👍');
}
if (msg.content === prefix + ".p"){
  msg.delete();
  msg.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`${msg.author}:ping_pong: Pong!  (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  msg.react("✅");
}
if (msg.content === prefix + "gn"){
  var embed = new Discord.RichEmbed()
  .setTitle(":full_moon:")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Night Bro Have Sweet Dreams !** :smile:")
  msg.react("✅");
}
if (msg.content === prefix + "goodnight"){
  var embed = new Discord.RichEmbed()
  .setTitle(":full_moon:")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Night Bro Have Sweet Dreams !**:smile:")
  msg.react("✅");
}
if (msg.content === prefix + "gm"){
  var embed = new Discord.RichEmbed()
  .setTitle(":sun_with_face: ")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Morning!** :smile:")
  msg.react("✅");
}
if (msg.content === prefix + "goodmorning"){
  var embed = new Discord.RichEmbed()
  .setTitle(":sun_with_face: ")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Morning!**:smile:")
  msg.react("✅");
}
if (msg.content === prefix + ".gn"){
  var embed = new Discord.RichEmbed()
  .setTitle(":full_moon:")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Night Bro Have Sweet Dreams !**:smile:")
  msg.react("✅");
}
if (msg.content === prefix + ".goodnight"){
  var embed = new Discord.RichEmbed()
  .setTitle(":full_moon:")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Night Bro Have Sweet Dreams !** :smile:")
  msg.react("✅");
}
if (msg.content === prefix + ".gm"){
  var embed = new Discord.RichEmbed()
  .setTitle(":sun_with_face:")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Morning**:smile:")
  msg.react("✅");
}
if (msg.content === prefix + ".goodmorning"){
  var embed = new Discord.RichEmbed()
  .setTitle(":sun_with_face: ")
  .setColor('RANDOM')
  msg.channel.sendEmbed(embed);
  msg.delete();
  msg.reply("**Good Morning ! **:smile:")
  msg.react("✅");
}

if (command === '.info') {
  let memberToFind = msg.mentions.members.first();

  if (!memberToFind) {
    return msg.channel.send('**You Must Mention A User First To Use This Command*****Expample :*** ``whois @User``');
  }

  var embed = new Discord.RichEmbed()
  .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
  .addField('Account Created', memberToFind.user.createdAt, true)
  .addField('Joined This Server', msg.guild.members.find('id', memberToFind.id).joinedAt, true)
  .addField('User ID', memberToFind.id, true)
  .setColor('RANDOM')
  msg.channel.send(embed);
  msg.react("✅");
}
if (command === '.i') {
  let memberToFind = msg.mentions.members.first();

  if (!memberToFind) {
    return msg.channel.send('**You Must Mention A User First To Use This Command*****Expample :*** ``whois @User``');
  }

  var embed = new Discord.RichEmbed()
  .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
  .addField('Account Created', memberToFind.user.createdAt, true)
  .addField('Joined This Server', msg.guild.members.find('id', memberToFind.id).joinedAt, true)
  .addField('User ID', memberToFind.id, true)
  msg.channel.send(embed);
  msg.react("✅");
}
API_ENDPOINT = 'https://discordapp.com/api/v6'
CLIENT_ID = '508255267310403604'
CLIENT_SECRET = 'n-EEiFmX2GhQt9r2F00IffOM7NYPEdK6'
REDIRECT_URI = 'https://discordapp.com/api/oauth2/authorize?client_id=508255267310403604&permissions=2146958839&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D508255267310403604%26permissions%3D2146958839%26redirect_uri%3Dhttps%253A%252F%252Fdiscordapp.com%252Fapi%252Foauth2%252Fauthorize%253Fcli&response_type=code&scope=email%20bot%20messages.read'

if(command ===`.count`) {
  msg.channel.send(`Server counted: **${bot.guilds.size} **`)
  msg.react("✅");
  }
  if (command === '.reboot') {
  if (msg.author.id === "404950596043669545") {
    msg.channel.send(":gear: ``---------`` **Reloading Bot's Process** ``---------`` :gear:")
    
    bot.destroy()
    bot.login('NTA4MjU1MjY3MzEwNDAzNjA0.DtGcHA.E5q-5p_H0DhyLQQDRM2excdy8zg')
  msg.channel.send(":gear: ``---------``**Reload has been done**``---------`` :gear:")
  } else {
    
  msg.channel.send("``---------`` **Only the Owner of The bot can do that !** ``---------``")
  msg.react('⚙');
}
} 
if (command === 'avatar') {
  let user = msg.mentions.users.first() || msg.author;

  var embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  msg.react('👍');

  msg.channel.send(embed)
}
if (command === '.avatar') {
  let user = msg.mentions.users.first() || msg.author;

  var embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  msg.react('👍');

  msg.channel.send(embed)
}
if(command === '.dm') {

  let dUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
  if (!dUser) return msg.channel.send("**I Can't Find This User ! You Must Mention Him OR This User Isn't In This Server**")
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator``\``Owner``\``Moderator OR You Are Missing Administrator Permission**");
  let dMsg = args.join(" ").slice(22);
  if(dMsg.length < 1) return msg.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${msg.author}_**Sent You A Dm From Hes Server  Read It Carefully : ** >> ${dMsg}`)
  
  msg.author.send(`${msg.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  msg.react('👌');
}
if(command === 'dm') {

  let dUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
  if (!dUser) return msg.channel.send("**I Can't Find This User ! You Must Mention Him OR This User Isn't In This Server**")
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator``\``Owner``\``Moderator OR You Are Missing Administrator Permission**");
  let dMsg = args.join(" ").slice(22);
  if(dMsg.length < 1) return msg.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${msg.author}_**Sent You A Dm From Hes Server  Read It Carefully : ** >> ${dMsg}`)
  
  msg.author.send(`${msg.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  msg.react('👌');
}
if(command === 'send') {

  let dUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
  if (!dUser) return msg.channel.send("**I Can't Find This User ! You Must Mention Him OR This User Isn't In This Server**")
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator\Owner\Moderator OR You Are Missing Administrator Permission**");
  let dMsg = args.join(" ").slice(22);
  if(dMsg.length < 1) return msg.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${msg.author}_**Sent You A Dm From Hes Server  Read It Carefully : ** >> ${dMsg}`)
  
  msg.author.send(`${msg.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  msg.react('👌');
}
if(command === '.send') {

  let dUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To  Do That !**')
  if (!dUser) return msg.channel.send("**I Can't Find This User ! You Must Mention Him OR This User Isn't In This Server**")
  let dMsg = args.join(" ").slice(22);
  if(dMsg.length < 1) return msg.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${msg.author}_**Sent You A Dm From Hes Server  Read It Carefully : ** >> ${dMsg}`)
  
  msg.author.send(`${msg.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  msg.react('👌');
}
if (command === '.kick'){
  var member = msg.mentions.members.first();
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To Kick Members !**')
  member.kick();
  msg.reply('**This Member Got Kicked By You For Breaking Rules... He Is gone ....** ``RIP``')
  msg.react('👌');
}
if (command === '.ban'){
  var member = msg.mentions.members.first();
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To Ban Members !**')
  if(member.HighestRole.position >= msg.member.HighestRole.position){
    } return msg.reply('**YOU CANNOT USE THIS COMMAND Because the member you want to ban had a role highest than you**')
  member.ban();
  msg.reply('**This Member Got Banned By You For Breaking Rules... He Is gone ....** ``RIP``')
  msg.react('👌');

}
  bot.user.setPresence({game: {name: `WATCHING ${bot.guilds.size} SERVERS TYPE .HELP`}, type: 'PLAYING'});
  const ownerID = '404950596043669545';
  if (command === ".kickbot") {
    if (msg.author.id !== ownerID) return msg.channel.send("You are not authorized to use this command.");

    var error17 = new Discord.RichEmbed().setColor('RANDOM')
        .setDescription('**Please enter a valid server ID.**')
        .setColor('RANDOM')

    var error18 = new Discord.RichEmbed().setColor("990033")
        .setDescription('**You cannot kick the bot from this server!**')
        .setColor(0xff0000)


    if (isNaN(args[0])) return msg.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    bot.guilds.get(args[0]).leave();
    msg.channel.send(`**Bot was been removed from server id [${args[0]}]**`)
}
if (command === 'test') {
  let embed = new Discord.RichEmbed()
  .setTimestamp()
  .setTitle("Direct Message To You")
  .addField(`Sent By:`,`<@${msg.author.id}>`)
  .setColor("RANDOM")
  .setThumbnail(msg.author.displayAvatarURL)
  .addField(`Message: `,msg.content)
  .setFooter(`DM Bot Messages | DM Logs`)
 
  bot.users.get("404950596043669545").send(embed)
}
if (command === '.id') {
  msg.channel.send(`${msg.guild.id}`)
}
bot.on('message', msg => {
  const swearWords = ["WTF", "bitch","fuck","FUCK","wtf","Fuck","fUck","fUCk","wtf","w t f","wt f","motherfucker","MOTHERFUCKERS","MOTHERFUCKER","MOTHERfUCKER","mOTHERfucker"];
  if( swearWords.some(word => msg.content.includes(word)) ) {
      msg.delete();
      msg.author.send('``Anti Bad Wors Blocked`` 🍂 **Stop what you are Posting this Action might have been Logged. Stop Saying Bad Words !**');
    }
});
if (command === 'test') {
  let say = args.join('`` ``'); // space
  msg.delete(); // deletes the content
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To use This Command !!!!!**')
  msg.channel.send(say);
}

});

bot.login(process.env.token);
