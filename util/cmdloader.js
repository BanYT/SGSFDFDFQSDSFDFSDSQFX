const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.miscCommands = new Discord.Collection();

const miscFiles = await readdir("./commands/");


miscFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let misc = require(`../commands/${f}`);
    client.miscCommands.set(misc.help.name, misc);
    client.commands.set(misc.help.name, misc);
	client.aliases.set(misc.help.alias, misc);
	});
console.log(`loaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}
