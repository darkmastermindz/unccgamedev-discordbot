const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);

  let kickEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff4c00")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Kicked From Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
    if(!message.member.hasPemission("MANAGE_MESSAGES")) return messages.channel.send("You don't have perms to kick. Report with `"+`${prefix}`+"`report 🙀")

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if (!kickChannel) return message.channel.send("Can't find incidents channel.");
}

module.exports.help = {
  name : "kick"
}
