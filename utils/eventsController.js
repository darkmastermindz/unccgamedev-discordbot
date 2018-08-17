const Discord = require("discord.js");
let stats = require("../stats.json");

module.exports.randomXP = (message) => {
    console.log("randomXP Module")

    //** XP Stuff **/
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log("Added" + xpAdd +"XP to "+ message.author.id);

    //reading from stats.json, if not found create entry
    if(!stats[message.author.id]){
        stats[message.author.id] = {
          xp: 0,
          level: 1,
          coins: 0
        };
    }
    

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = Math.ceil(Math.sqrt(Math.abs(xp[message.author.id].level))) * 50;
    stats[message.author.id].xp =  curxp + xpAdd;

    if(nxtLvl <= stats[message.author.id].xp){
        stats[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor("#00703C")
        .addField("New Level", curlvl + 1);

        message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }

    fs.writeFile("./stats.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
    });
}

module.exports.welcomeMessage = (member) => {
    const defaultChannel = member.guild.channels.find(c => c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}