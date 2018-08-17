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
  let curlCoins = stats[message.author.id].coins;
  let nxtLvlXp = Math.ceil(Math.sqrt(Math.abs(xp[message.author.id].level))) * 50
  let difference = nxtLvlXp - curxp;

  let statsembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(color.purple)
    .addField("You've been here since", message.member.joinedAt)
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .addField("Coins", "💸", curlCoins, true)
    .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL)

  message.channel.send(statsembed); //.then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "stats"
}
