exports.run = (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('**Nie jesteś w kanale głosowym.**');
    if (!message.guild.me.voiceChannel) return message.channel.send('**bot jest już podłączony do kanału**');
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('**Nie jesteś w kanale głosowym.**');
    message.guild.me.voiceChannel.leave();
}