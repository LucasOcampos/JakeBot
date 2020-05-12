const Discord = require('discord.js');
const CLIENT = new Discord.Client();

const TOKEN = 'NzA5NDg4MDc3MzAyNjYxMjMw.XrmoZA.YynpzQnTZutheFsvcSa_N3p_xlg';
const PREFIX = '!';

CLIENT.on('ready', () => {
    console.log('JakeBot online!')
})

// Listens to !signup in #sign-up channel
CLIENT.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    let channelID = message.channel.id;

    if(args[0] === 'signup' && channelID === '709436605928046642'){
        let author = message.client;
        message.author.send('Para ter acesso aos canais de texto e voz de Central ADS, utilize o link:\n' +
            'LINK\n\n' +
            'Isto garantirá acesso completo aos canais, onde poderá receber ajuda de outros alunos, assim como você!');
    }
})

// Prints Avatar in chat
CLIENT.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    if(args[0] === 'avatar'){
        message.reply(message.author.displayAvatarURL());
    }
})

// CLIENT.on('message', message => {
//     let args = message.content.substring(PREFIX.length).split(" ");
//
//     switch (args[0]) {
//         //case '':
//     }
// })

CLIENT.login(TOKEN);