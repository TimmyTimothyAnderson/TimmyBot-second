const Commando = 
require('discord.js-commando')
const Discord = require('discord.js')
const bot = new Commando.Client({
    owner: '490270369865924638'
});

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message',function(message){
    if(message.content == "I am bored")
    {
         message.channel.send("Try playing a game!")
    }
});

bot.on('ready',function(){
      console.log("Hello!")
})

bot.login('NTMwOTg4NTY2MDUwODk3OTQ5.DxJOoQ.MAyMu7DJpzFMRRVo4dNjCRVEx98')
