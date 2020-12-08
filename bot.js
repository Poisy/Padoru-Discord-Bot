require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var script = ["HASHIRE SORI YO", "KAZE NO YOU NI", "TSUKIMIHARA WO", "PADORU PADORU"]

client.on('message', msg => {
    if (!msg.author.bot) {
        for (var i = 0; i < script.length; i++) {
            msg.channel.send(`***${script[i]}~***`)
        }
    }
});

client.login(process.env.BOT_TOKEN);
