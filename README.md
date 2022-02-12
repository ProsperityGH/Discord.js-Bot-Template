# Discord.js-Bot-Template
This is a very simple template for making bots using Discord.js/Node.js
---
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FProsperityGH%2FDiscord.js-Bot-Template&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
# Tutorial:

To begin, Install [Node.js](https://nodejs.org/en/) here.

After Node.Js is succesfully installed run the following command in the folder where the files for your discord bot will be and fill in the information:

<pre> npm init </pre>

Create an app in the [Discord Developer Portal](https://discord.com/developers/applications) and on the left go to ``` Bot > Build-A-Bot ``` to set up the bot

In the `main.js` type the following:

<pre>
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
</pre>

Edit the `const token = ''`  to your bot's token you've been given. **DO NOT SHARE THIS TOKEN WITH ANYONE!**

**Optional** Edit the `const PREFIX = ''` if you want to use a prefix for messages, For example **=ping** would be `const PREFIX = '='`

To create an invite link for your bot. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and on the left go to ```OAuth2 > URL Generator``` and choose the option `Bot` under `Scopes`. You can edit the bots permissions how you like.

To make the bot **temporarily** online, type the following in the command prompt in the folder with the files:

<pre> node . </pre>

You should get a response like "I am online!". in the Command Prompt.

To test your bot, Invite the bot to a server and type `ping` in the chat. When you get a reply from the bot with `pong` it means that the bot is working! You can now edit the code and add new features to it.

To learn more about [discord.js](https://discord.js.org/#/docs/discord.js/stable/general/welcome) Click the link to go to the discord.js documentation.

---
## Help/Support
I'm actually not intending to help everyone with any problems with the tutorial. if there's a bug i'll recommend searching for discord.js related help. You can always go to the discord.js discord server to ask help. (link is here down below)

---
## Links

- [Node.js Download](https://nodejs.org/en/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord.js Documentation](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
- [Discord.js Discord Server](https://discord.com/invite/bRCvFy9)
