const Discord = require('discord.js');

const bashi = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

bashi.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
