const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let helpIcon = bot.user.displayAvatarURL;
  let helpEmbed = new Discord.RichEmbed()
    .setDescription("Bot Commands")
    .setColor("#20C20E")
    .setThumbnail(botIcon)
    .addField("hello", "say hello to the bot")
    .addField("botinfo", "get bot info")
    .addField("serverinfo", "get bot info")
    .addField("report", "report a user")
    .addField("kick","kick a user")
    .addField("ban", "ban a user");

  message.channel.send(helpEmbed);
}

module.exports.help = {
  name : "help"
}
