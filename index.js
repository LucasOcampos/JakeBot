const Discord = require('discord.js');
const CLIENT = new Discord.Client();

const PREFIX = '!';
const canalRegras = '709441778805243944';
const canalSignUp = '709436605928046642';
const canalPermissoes = '709450439703396403';

CLIENT.on('ready', () => {
    console.log('JakeBot online!')
})

// Listens to !signup in #sign-up channel
CLIENT.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    let channelID = message.channel.id;

    // if(args[0] === 'signup' && channelID === canalSignUp){
    //     let author = message.client;
    //     message.author.send('Para ter acesso aos canais de texto e voz de Central ADS, utilize o link:\n' +
    //         'http://centralads.epizy.com\n\n' +
    //         'Isto garantirá acesso completo aos canais, onde poderá receber ajuda de outros alunos, assim como você!\n' +
    //         'Antes de usufruir dos nossos canais, passar no canal <#' + canalRegras + '> para verificar as regras da comunidade e entre no canal <#' + canalPermissoes + '> para informar o seu semestre.');
    // }

    if(args[0] === 'signup' && channelID === canalSignUp){
        let roleEstudante = '689855960771985425';
        let roleNaoInscrito = '709438034747195471';

        args.shift();
        let nickname = args.join(' ');

        member.setNickname(nickname);
    }

    if(args[0] === 'signup' && channelID !== canalSignUp){
        message.reply('esse comando só pode ser enviado no canal <#' + canalSignUp + '>');
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