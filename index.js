Discord = require("discord.js");
const client = new Discord.Client();
let token = process.env.token;



client.on('ready', () => {
console.log('IM READY !');
});


        
          
        
});
     
  client.login(process.env.token);
