const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>  {
  message.channel.send("You Had Me at Hello World!");
}

module.exports.help = {
  name : "hello"
}
