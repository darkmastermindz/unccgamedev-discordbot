const Discord = require("discord.js");
let stats = require("../stats.json");
const exceptions = require("../utils/exceptions.js");

module.exports.run = async (bot, message, args) => {
  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(!stats[message.author.id]){
    exceptions.cantFindStats(message.author.id)
  }

  if(coinAmt === baseAmt){
    let uCoins = stats[message.author.id].coins;
    // stats[message.author.id] = {
    //   stats[message.author.id].coins + coinAmt
    // };
    stats[message.author.id].coins = uCoins + coinAmt
  }

  fs.writeFile("./stats.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}


module.exports.help = {
  name: "daily"
}
