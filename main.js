const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const token = '';
const PREFIX = ''; 

bot.on('ready', () => {
    console.log("I am online!")
})
bot.on("message", msg => {
    if (msg.content === PREFIX + "ping") {
      msg.reply("pong");
    }
})

bot.login(token)