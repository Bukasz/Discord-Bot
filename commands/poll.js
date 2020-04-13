const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if (!message.member.roles.find("name", "Nothing")) {
        message.channel.send('Potrzebujesz rangi (Adminstratora)');
        return;
    }
    if (!args[0]) return message.channel.send('Poprawnie uzywaj to tak: <prefix>poll "pytanie" ');
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('Wybierz jedną z emotek!')
        .setDescription(args.join(' '))
        .setTitle(`Głosowanko stworzone przez ${message.author.username}`);
    let msg = await message.channel.send(embed);
    await msg.react('✅');
    await msg.react('❎');
    message.delete({timeout: 1000});
}