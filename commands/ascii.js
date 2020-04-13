const ascii = require('ascii-art');
exports.run = (client, message, args, ops) => {
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        rendered = rendered.trimRight();
	message.delete();
        if (rendered.length > 2000) return message.channel.send('Zbyt długa wiadomosc');
        message.channel.send(rendered, {
            code: 'css'

        });
    });
};