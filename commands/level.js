const Discord = require("discord.js");
let color = require("../utils/color.js");
let stats = require("../stats.json");
const exceptions = require("../utils/exceptions.js");

module.exports.run = async (bot, message, args) => {

  if(!stats[message.author.id]){
    exceptions.cantFindStats(message.author.id)
  }

  let curxp = stats[message.author.id].xp;
  let curlvl = stats[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(color.purple)
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "level"
}
