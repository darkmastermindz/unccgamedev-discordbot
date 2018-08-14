const Discord = require("discord.js");

module.exports.randomXP = (message) => {
    //** XP Stuff **/
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log("Added" + xpAdd +"XP to "+ message.author.id);

    //reading from xp.json, if not found create entry
    if(!xp[message.author.id]){
    xp[message.author.id] = {
        xp: 0,
        level: 1
    };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = Math.ceil(Math.sqrt(Math.abs(xp[message.author.id].level))) * 300;
    xp[message.author.id].xp =  curxp + xpAdd;

    if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor("#00703C")
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }

    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
    });

    return void(0);

}

module.exports.help = {
  name: "randomxp"
}