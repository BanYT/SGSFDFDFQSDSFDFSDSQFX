let Discord = require('discord.js');
exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1,2).join(' ');

let id = message.content.split(' ').slice(1,2).join(' ');

  let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(id);
  
  
  let dMsg = message.content.split(' ').slice(2).join(' ');


if(!cmd||cmd==='netflix'){


var list = [

"brunofregnani665@gmail.com:123bruno",
"lordmegaminer2@gmail.com:Minecraft29",
"arianmoradi@icloud.com:Jolanta52",
"tory.johnson30@gmail.com:chaos123",
"elay@gmail.com:sparrows",
"flavioeng10@gmail.com:wdflavio538248",
"lincoln_frozt30@yahoo.com:64825goe",
"kaliko@gmail.com:BEV6348",
"weiler1027@yahoo.com:jasperdog",
"jcmacipe@gmail.com:hivapiti84",
"sfzm15@yahoo.com:h81401991,Free,",
"smacku2b@aol.com:Godsmack4",
"brandyboswell@ymail.com:2001coco",
"elluqitaaz@live.com.ar:newells",
"marcopaulocaetano@gmail.com:Lastson1",
"jake.latouf@yahoo.com:skateboard22",
"wmmillar@gmail.com:Ibanez28",
"apamphilon@yahoo.com:Muse2304",
"alexfeelthat@gmail.com:1a2s3d4f",
"ajloucks@gmail.com:younoget",
"jdnessmith@gmail.com:shadow01",
"aprice0101@gmail.com:99919pass",
"dima.brol@gmail.com:heyn1gga",
"dklo44@hotmail.com:derek0131",
"lmartin77@q.com:mickey11",
"rhiannon_newton@hotmail.com:August1991",
"zietsilya@gmail.com:pbtwbkmz",
"zietsmanwillem@gmail.com:willem101",
"ziga.gale@gmail.com:efbcdcb96397",
"zyaayz@gmail.com:shithead2",
"zanobi75@gmail.com:pinkroof",
"zsutty2@gmail.com:tool0007",
"zsuzsi36@gmail.com:cecilbest1",
"zaksh1@gmail.com:123456",
"zamarkfleming@gmail.com:maxmax57",
"details@gmail.com:5xqj0Rd",
"zuguiwang@gmail.com:wang7980",
"zuhairahmad89@gmail.com:munna123",
"zoey-anna@live.co.uk:brapbrap",
"buddymaxdebbie@aol.com:flowerdew22",
"bpmanion@bex.net:brownie",
"tobbeolsson96@hotmail.com:kofYOC715",
"gihan.seneviratna@gmail.com:kaluTara2",
"yspgsh@gmail.com:cricket828pen",
"sylvias91@live.se:SAAB12453",
"aoao12@hotmail.com:za0844158050",
"lucareischl@gmx.de:reischl01",
"roewer@gmail.com:mongoose",
"dazza78@hotmail.co.uk:Lovelissa5",
"vinod.nair2000@gmail.com:aon1973",
"onlylove_ice@yahoo.com.tw:travel1022",
"sandfordj@hotmail.co.uk:19james93",
"hassnain87@hotmail.com:westfield",
"irfandhirani@gmail.com:soccer",
"sandfordj@hotmail.co.uk:19james93",
"aha2@hotmail.com:hnbtoul",
"dj_prinsassy@yahoo.com.sg:020406",
"DREAMS_NASER@HOTMAIL.COM:ma3shoqa",
"happyatif@yahoo.com:lahore",
"faheemraza@yahoo.com:ark1502",
"chieko.m@gmail.com:000155b8fb86f2c34627f9f1d6290b8fd73148d4",
"thomas.stabell@gmail.com:6bf9f212311ab8f445637c5860b97a311bf1dcd8",



];
  
  var rand = Math.floor(Math.random() * list.length);
  
  var embed = new Discord.RichEmbed()
.setTitle('**Your Netflix Account**')
.addField("**Generator Accounts**", list[rand])
.setColor("RANDOM")
  
  message.author.send(embed)
}
}

module.exports.help = {
	name: "gen",
	alias: "GEN"
}
