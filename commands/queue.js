exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send('Narazie nie gra żadna muzyka lel');
    let queue = fetched.queue;
    let NowPlaying = queue[0];
    let resp = `Teraz gra: __**${NowPlaying.songTitle}**__\n\n`;
    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}**`;
    }
    message.channel.send(resp);
}