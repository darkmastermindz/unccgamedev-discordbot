const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");

  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");

  // if muterole role doesn't exist, create it!
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        // for each channel set these permissions
        await channel.overwritePermissions(muterole, {
          SEMD_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
      }catch(e){
        console.log(e.stack);
      }
    }

    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time!");

    await(tomute.addRole(muterole.id));

    message.reply(`<@${tomute.id} has been muted for $ms{(mutetime)}`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);

      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    })
  }

module.exports.help = {
  name: "tempmute"
}
