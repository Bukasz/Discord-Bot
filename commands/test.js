const send = require(quick.hook);
const Discord = require(discord.js);

exports.run = (client, message, args, tools) => {
    let split = '&';
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setTitle('Uwaga')
            .setDescription(`zle wpisane...`);
        return send(message.channel, embed, {
            name: 'narazie tu nic',
            icon: 'https://cdn.discordapp.com/avatars/336522006465871872/399ce42b50a0ac57f8592572dbcfcfc4.png?size=2048'
        })
    }
    args = args.join(' ').split(split);
    for (var i = 0; i < args.length; i++) args[i].trim();
    if (args[4]) args[4] = parseInt(`0x${args[4]}`);
    let options = {
        title: args[0] || 'Uwaga',
        message: args[1] || undefined,
        name: args[2] || 'Bocik',
        icon: args[3] || 'https://cdn.discordapp.com/avatars/336522006465871872/399ce42b50a0ac57f8592572dbcfcfc4.png?size=2048',
        embedColor: args[4] || 0xffffff
    }

    const embed = new Discord.MessageEmbed()
        .setColor(options.embedColor)
        .setTitle(options.title)
    if (options.message) embed.setDescription(options.message);
    send(message.channel, embed, {
        name: options.name,
        icon: options.icon
    })
}