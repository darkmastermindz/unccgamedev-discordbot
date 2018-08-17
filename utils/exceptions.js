const Discord = require("discord.js");
const stats = require("../stats.json");

module.exports.cantFindStats = (memberID) => {
    console.log("user with id: " + memberID + " has no entry");
    stats[memberID] = {
     xp: 0,
     level: 1,
     coins: 0,
   };
   console.log("created new entry for " + memberID)
}
