const commando = 
require('discord.js-commando')

class BoredCommand extends  commando.Command
{
    constructor(client)
    {
          super(client,{
                name: 'bored',
                group: 'fun',
                memberName: 'bored',
                description: 'Suggests you something when you are bored!'
          });
    }
    
   async run(message,args)
   {
          var chance = 
Math.floor(Math.random() * 2)
          if(chance == 0)
          {
             message.channel.send("Play a game!")
          }
          else
          {
             message.channel.send("Watch youtube! https://www.youtube.com")
             
          }
   }
}

module.exports = BoredCommand
