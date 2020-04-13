const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
    if (!message.member.roles.find("name", "Nothing")) {
        message.channel.send('Potrzebujesz waznej rangi');
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Nie mozna znaleźć uzytkownika");
    if(tomute.hasPermissions("MANAGE_MESSAGES")) return message.reply("Nie mg go zmutowac");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch (e){
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Ale jak dlugo?");
    await(tomute.addRole(muterole.id));
    message.reply(`@${tomute.id} został zmutowany ${ms(mutetime)}`);
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> został odmutowany!`);
    }, ms(mutetime))
}
