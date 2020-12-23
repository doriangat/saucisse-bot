const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require("ytdl-core");



module.exports = {
	name: 'play [URL]',
	description: "Pour jouer lien YT",
}


module.exports.run = async (bot, message) => {
  

    message.delete();

    var prefix = "s!play" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const url = args.shift().toString();

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        connection.play(ytdl(url, {filter : 'audioonly'}));
     

    }else {
        message.reply('Il faut etre dans le : channel vocal');
        }

        
}


        
module.exports.help = {
    name: "play"
}

