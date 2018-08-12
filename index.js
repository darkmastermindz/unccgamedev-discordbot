const botconfig = require("./botconfig.json");
const token = require("./token.json"); // Create a json file with {value: yourToken}
const Discord = require("discord.js");
const fs = require("fs");

let coins = require("./coins.json");
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 3;

const bot = new Discord.Client({disableEveryone: true})

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log('${bot.user.username} is online!')
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("~help", {type: "Bot being developed!"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  // if(!coins[message.author.id]){
  //   coins[message.author.id] = {
  //     coins: 0
  //   };
  // }

  // let coinAmt = Math.floor(Math.random() * 15) + 1;
  // let baseAmt = Math.floor(Math.random() * 15) + 1;
  // console.log(`${coinAmt} ; ${baseAmt}`);
  //
  // if(coinAmt === baseAmt){
  //   coins[message.author.id] = {
  //     coins: coins[message.author.id].coins + coinAmt
  //   };
  // fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  //   if (err) console.log(err)
  // });
  // let coinEmbed = new Discord.RichEmbed()
  // .setAuthor(message.author.username)
  // .setColor("#0000FF")
  // .addField("💸", `${coinAmt} coins added!`);
  //
  // message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  // }

  xpRandom(message);

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;

  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 3 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});


  function xpRandom(message){

  //** XP Stuff **/
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

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

bot.login(token.value);
