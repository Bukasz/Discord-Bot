const Discord = require("discord.js")
const client = new Discord.Client();
const Commando = require("discord.js-commando");
const ytdl = require("ytdl-core");
const active = new Map();
let coins = require("./coins.json");
const fs = require("fs");

const TOKEN = "NDU5MzU4Nzk5MTExNzgyNDAw.XjcX0Q.6NS9rtHxvu8r6FITzACX7IsovfY";

const PREFIX = "%";

const queue = new Map();

client.on('message', message => {
    let msg = message.content.toLowerCase();
    let args = message.content.slice(PREFIX.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    
    if (command === 'say') {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
    }
})
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }
    let coinAmt = Math.floor(Math.random() * 15) +1;
    let baseAmt = Math.floor(Math.random() * 15) + 1;
    console.log(`${coinAmt} ; ${baseAmt}`);

    if(coinAmt === baseAmt) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });
    }
})
client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'user');
    member.addRole(role)
})
client.on('ready', () => {
    console.log("Bot jest gotowy!")
    
});
client.on("message", function(message) {
    if (message.author.equals(client.user)) return;
    
    if (message.content.startsWith(PREFIX))
        
    var args = message.content.substring(PREFIX.length).split(" ");
})
client.on('message', message => {

    let args = message.content.slice(PREFIX.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
    try {
        let ops = {
            active: active
        }
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    } catch (e) {
        console.log (e.stack);
    }
});
client.login(TOKEN);
    