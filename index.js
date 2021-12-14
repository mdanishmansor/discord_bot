const {Client, Emoji, VoiceChannel, VoiceConnection, Discord} = require('discord.js'),
Distube = require('distube'),
client = new Client();
const  config  = require('./config.json');
const command = require('./command');
const { DiscordTogether } = require('discord-together');
// const client = new DiscordJS.Client();

//distube


//npm for multiple features
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
const cron = require("cron");
const {chatBot} = require("tech-tip-cyber");
const axios = require("axios");
// const WOKCommands = require("wokcommands");

client.on("ready", () => {
    // new WOKCommands(client, 'commands')
    client.user.setActivity('With Humble Text Slave', { type: 'PLAYING' })
		.then (presence => console.log(`Activity set to ${presence.activities[0]}`))
		.catch(console.error);
     console.log("Bot is online");
});

client.on("message", async message => {
    const prefix = "k";
    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift();
    
    const AIChannel = client.channels.cache.find(channel => channel.id === "833649931600003093")
    const USChannel = client.channels.cache.find(channel => channel.id === "833670936204279808")
    
    const voiceChannel = message.member.voice.channel;
    let Sahur = new cron.CronJob('00 00 05 * * *', () => {
        message.channel.send(`Bangun Sahur Bodo ${message.author}`)
    });
    const answers = [
        'Dei Kishor!',
        'Hi Ashley',
        'Hi Rafel'
    ];

    // 'Besok Cuti :nerd_face: ',
    //     'Besok Tak Cuti 😢',
    //     'Val Jom 🎮',
    //     'Lapar Do 😥',
    //     'You Need to Understand :neutral_face:',
    //     'Time to sleep 😴',
    //     'Paan Memaan Termaan',
    //     'mak ko hijo',
    client.discordTogether = new DiscordTogether(client);
    if (cmd === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            })
        }
    }
     
    if(cmd === "ping"){
        const msg = await message.channel.send(`Pinging boss tunggu jap..`);
        const pingnumber = msg.createdAt - message.createdAt;
        
        msg.edit(`${answers[Math.floor(Math.random() * answers.length)]}\nMachine Responded in`+ `` +  pingnumber +`ms`+`\nAPI Responded in ${Math.round(client.ws.ping)}` + `ms`+`\n${message.author}`);
    }
    if(cmd ==="join"){
        if(!voiceChannel){
            message.reply(`Masuk Voice Channel Dulu Bro 🤦‍♂️`);
        }
        voiceChannel.join();   
    }

    if(cmd ==="sahur"){
        const KejutSahur = [
            'Alright nanti aku kejut kau bro',
            'Kau ingat aku macai ke, JK nanti aku kejut',
            'Bayar AH! :money_with_wings:',
            'Can, but aku tak puasa do',
        ];
        message.channel.send(`${KejutSahur[Math.floor(Math.random() * KejutSahur.length)]}` + `` + `${message.author}`  )
        Sahur.start()
    }
    if(cmd === "cancelsahur"){
        message.channel.send("Okay aku tak kejut")
        Sahur.stop()

    }
    if(cmd ==="orange"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://l.top4top.io/m_1765hz6zn0.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="hau"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://b.top4top.io/m_2059w51zl1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="nanodesu"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://l.top4top.io/m_2059p03db1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="nipaa"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://l.top4top.io/m_2059gqxc21.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="rage"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://e.top4top.io/m_2059rb8gt1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="awalsem"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://b.top4top.io/m_20592wn4r1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="haram"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://i.top4top.io/m_20592zy0o1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="firstsem"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://g.top4top.io/m_2059ed7ln1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="diam"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://c.top4top.io/m_2059vipx91.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="kishen"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://b.top4top.io/m_2059ozkph1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="kacang"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://a.top4top.io/m_205962n8b1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="jo"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://a.top4top.io/m_2059lr7dl1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="papa"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://f.top4top.io/m_20590dfec1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    }
    if(cmd ==="sting"){
        const streamOptions = { seek: 0, volume: 1 };
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
                    console.log("joined channel");
                    const stream ='https://e.top4top.io/m_2059tqxvq1.mp3';
                    const dispatcher = connection.play(stream);
                            }).catch(err => console.log(err));
    };
});
    

client.login("ODMzMDIxODQ1NTYwNDkyMDM0.YHsSDA.7phuvQQP7KjtwzobRebMm4pkP7Y");
