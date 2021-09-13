const {Client, Emoji, VoiceChannel, VoiceConnection} = require("discord.js");
const  config  = require('./config.json');
const command = require('./command');
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
const cron = require("cron");
const {chatBot} = require("tech-tip-cyber")
const axios = require("axios");


const client = new Client({
    disableEveryone: true
});

client.on("ready", () => {
    console.log("Bot is online");
	client.user.setActivity('With Humble Text Slave', { type: 'PLAYING' })
		.then (presence => console.log(`Activity set to ${presence.activities[0]}`))
		.catch(console.error);
});
client.on("message", async message => {
    const prefix = "k";
    const AIChannel = client.channels.cache.find(channel => channel.id === "833649931600003093")
    const USChannel = client.channels.cache.find(channel => channel.id === "833670936204279808")
    if(message.author.bot) return;
    if(message.channel.id === "833670936204279808"){
        let content = message.content;
        chatbot.getReply(content).then(r => USChannel.send(r))
    }
    if(message.channel.id === "833649931600003093" ){
        if(message.author.bot) return // If Bot Messages Then It Won't Reply
        if(message.channel.type === 'dm') return // If Message Is Sent In DMs Then It Won't Reply
        if(message.attachments.size > 0) return message.reply('I Can\`t read Images') // If Images Are Sent BOT Will Send This
        else {
        const jawapan = await chatBot({Message: message});
        return message.channel.send(`> ${message}\n${jawapan}, ${message.author}`);
        }
    };
   
   
    //if(message.content === "Try"){
      //  message.reply(`Try`)
    //};
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const voiceChannel = message.member.voice.channel;
    //const VC = client.voice.channel;
    let Sahur = new cron.CronJob('00 00 05 * * *', () => {
        message.channel.send(`Bangun Sahur Bodo ${message.author}`)
    });
    const answers = [
        'Besok Cuti :nerd_face: ',
        'Besok Tak Cuti 😢',
        'Bro Next Monday Kau Start Intern, GOODLUCK! 👍',
        'Kishen Val Jom 🎮',
        'Lapar Do 😥',
        'You Need to Understand :neutral_face:',


    ];

    
    
    
    
     
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
    if(cmd ==="leave"){
         if(!voiceChannel)
         message.reply(`Masuk Voice Channel Dulu Bro 🤦‍♂️`);    
         //if(!Connected)
            //message.reply(`Bro Aku Takde Dalam Voice Channel 😂`); 
        else {
            voiceChannel.leave();
            message.reply(`Ciao Lu Bossku`);
        }
        };
     

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
    }
    if(cmd ==="stop"){
        var Voice = message.member.voice.channel;
                Voice.join().then(connection => {
       console.log("music stopped");
    });
}

})
client.login(config.token)
