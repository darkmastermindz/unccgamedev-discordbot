const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  message.delete(1000).catch(O_o=>{}); //delete previous message (input command)

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.").then(msg => {
    msg.delete(10000)
  })
  .catch(O_o=>{});
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#E5DA2A")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

  //return message.channel.send(reportEmbed); //send msg in current channel
  let reportsChannel = message.guild.channels.find(`name`, "incidents") //TODO: set reports channel
  if(!reportsChannel) return message.channel.send("Couldn't find reports channel.");

  return reportsChannel.send(reportEmbed);
}

module.exports.help = {
  name : "report"
}
