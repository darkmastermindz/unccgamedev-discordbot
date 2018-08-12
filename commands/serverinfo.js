const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let serverIcon = message.guild.displayAvatarURL
  let serverEmbed = new Discord.RichEmbed()
  .setDescription("Server Info")
  .setColor("#15f153")
  .setThumbnail(serverIcon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You've been here since", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  message.channel.send(serverEmbed);
}

module.exports.help = {
  name : "serverinfo"
}
