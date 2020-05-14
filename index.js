const Discord = require('discord.js');
const CLIENT = new Discord.Client();

const PREFIX = '!';
const canalSignUp = '709436605928046642';

CLIENT.on('ready', () => {
    console.log('JakeBot online!')
})

// Listens to !signup in #sign-up channel
CLIENT.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    let channelID = message.channel.id;

    if(args[0] === 'signup' && channelID === canalSignUp){
        let author = message.client;
        message.author.send('Para ter acesso aos canais de texto e voz de Central ADS, utilize o link:\n' +
            'LINK\n\n' +
            'Isto garantirá acesso completo aos canais, onde poderá receber ajuda de outros alunos, assim como você!');
    }
    if(args[0] === 'signup' && channelID !== canalSignUp){
        message.reply('esse comando só pode ser enviado no canal <#709436605928046642>');
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

CLIENT.login(process.env.BOT_TOKEN);