const Discord = require("discord.js");
const botconfig = require("../botconfig");
let coins = require("../coins.json");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  //** coins **//
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;

  //** xp **//
  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let statsembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#00FF00")
    .addField("You've been here since", message.member.joinedAt)
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL)
    .addField("Coins", "💸", uCoins, true);

  message.channel.send(statsembed); //.then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "stats"
}
