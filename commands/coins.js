const Discord = require("discord.js");
let stats = require("../stats.json");
const exceptions = require("../utils/exceptions.js");

module.exports.run = async (bot, message, args) => {

  if(!stats[message.author.id]){
    exceptions.cantFindStats(message.author.id)
  }

  let uCoins = stats[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}
