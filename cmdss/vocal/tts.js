
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: 'tts',
	description: "s!tts (le texte)",
}


module.exports.run = async (bot, message,) => {
    message.delete();

    var prefix = "s!tts" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toString();
        var nom = command;

// notice that `tts.synthesize` returns a Promise<Buffer>
const saveFile = async () => {
    const buffer = await tts.synthesize({
        text: nom,
        voice: 'fr-FR'
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();

if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play('./hello-world.mp3', {
        volume: 0.5,
    });
}else {
    message.reply('Il faut etre dans le : channel vocal');
}

}
        
module.exports.help = {
    name: "tts"
}