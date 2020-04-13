exports.run = (client, message, args, tools) => {
    if (!message.member.roles.find("name", "###")) {
        message.channel.send('Potrzebujesz rangi (Programejszyn)');
        return;
    }
    if (isNaN(args[0])) return message.channel.send('**We we daj poprawną liczbe wiadomosci do usuniecia **');
    if (args[0] > 100) return message.channel.send('**potrzebuje mniejszej liczby niz 100, poniewaz Bukasz ma slabego neta**');
    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości**  `).then ( msg=> msg.delete({ timeout:1000 })))
            .catch( error => message.channel.send(`**ERROR:** ${error.message}`));
}