const { Telegraf } = require('telegraf')
const axios = require('axios')
const updateLogger = require('telegraf-update-logger');
const chalk = require('chalk');
const { Extra } = require('telegraf')
const os = require('os') 
const moment = require(`moment-timezone`)
const speed = require(`performance-now`);
const fs = require('fs')

// Load File
let setting = JSON.parse(fs.readFileSync(`./lib/setting.json`))

let {
    Token,
    paisKey,
    lolKey,
    vhKey,
} = setting

            /* Bot */

const bot = new Telegraf(Token)

        /* Log Fungtion */

bot.use(
    updateLogger({
      colors: {
        id: chalk.red,
        chat: chalk.yellow,
        user: chalk.green,
        type: chalk.bold,
      },
    }),
  );

        /* function */
        
const pilh = ["000", "000", "0000"]
const jsjs = pilh[Math.floor(Math.random() * pilh.length)]
const SN = GenerateSerialNumber(jsjs)

function messageError(ctx){
    ctx.reply(`Error!, Please report to the pais about this`)
}
function GenerateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateRandomChar() {
    var chars = "abcdefghijklmnopqrztuvwxyz";
    var randomNumber = GenerateRandomNumber(0,chars.length - 1);
    return chars[randomNumber];
}

function GenerateSerialNumber(mask){
    var serialNumber = "";
    if(mask != null){
        for(var i=0; i < mask.length; i++){
            var maskChar = mask[i];
            serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
        }
    }
    return serialNumber;
}

function sendsearch(ctx){
    // let chatId = msg.chat.id;
    let botReply = "Wait, the bot is being searched"
    bot.telegram.sendMessage(ctx.chat.id ,botReply)
        .then((result) => { setTimeout(() => {
            bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
        }, 10 *  500)})
        .catch(err => console.log(err))
    }

function sendProses(ctx){
    // let chatId = msg.chat.id;
    let botReply = "Wait, in progress"
    bot.telegram.sendMessage(ctx.chat.id ,botReply)
        .then((result) => { setTimeout(() => {
            bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
        }, 10 *  500)})
        .catch(err => console.log(err))
    }
function sendLoading(ctx){
    // let chatId = msg.chat.id;
    let botReply = "Wait, Data is being sent"
    bot.telegram.sendMessage(ctx.chat.id ,botReply)
        .then((result) => { setTimeout(() => {
            bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
        }, 10 *  1000)})
        .catch(err => console.log(err))
    }
function sendMessageStart(ctx){
    var date = new Date();
    var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚"; break;
                case 1: waktoo = "Tengah Malam🌒"; break;
                case 2: waktoo = "Dini Hari🌒"; break;
                case 3: waktoo = "Dini Hari🌓"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Pagi🌝"; break;
                case 7: waktoo = "Pagi🌝"; break;
                case 8: waktoo = "Pagi🌝"; break;
                case 9: waktoo = "Pagi"; break;
                case 10: waktoo = "Pagi🌞"; break;
                case 11: waktoo = "Siang🌞"; break;
                case 12: waktoo = "Siang🌞"; break;
                case 13: waktoo = "Siang🌞"; break;
                case 14: waktoo = "Siang🌞"; break;
                case 15: waktoo = "Sore🌝"; break;
                case 16: waktoo = "Sore🌝"; break;
                case 17: waktoo = "Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Malam🌚"; break;
                case 21: waktoo = "midnight🌚"; break;
                case 22: waktoo = "midnight🌚"; break;
                case 23: waktoo = "midnight🌚"; break;
            }
            var tampilTanggal = "*Tgl :* " + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "*Time :* " + jam + ":" + menit + ":" + detik + " Wib⌚";
    const tm = `●▬▬▬▬▬▬ஜ۩ஜ▬▬▬▬▬▬●

❏ *I am Eriri and I'm a bot💞*

❖ Name : *${ctx.botInfo.first_name}*
❖ Version : \`1.0.0\`
❖ Owner : *Pais*

❖ *Note:* \`This bot is still under development, and for me to learn to make a bot\`

❖ ${tampilWaktu} Ind 🇮🇩

ㅤㅤㅤㅤㅤㅤ╭∩╮ʕ•ᴥ•ʔ╭∩╮
ㅤㅤㅤㅤㅤㅤㅤㅤ@𝓟𝓪𝓲𝓼
ㅤㅤㅤㅤㅤㅤㅤ⌤⌤⌤⌤⌤
`
    // console.log(ctx)
    bot.telegram.sendMessage(ctx.chat.id, tm,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Info👼🏻', callback_data: 'info'},
                    { text: 'Docs📚', callback_data: 'menu'},
                    { text: 'Ping🚀', callback_data: 'ping'}
                ],
                [
                    { text: 'WhatsApp Bot🤖', url: 'wa.me/6287771818443'},

                ]
            ]
        },
        parse_mode: "Markdown"
    })
}

function sendInfo(ctx){
    const text = `●▬▬▬▬▬▬ஜ𝐈𝐧𝐟𝐨ஜ▬▬▬▬▬▬●

This is a free bot for everyone to use😳.

If you want to donate you can click the button below💕💞.

If there is an error please report it to pais / admin😁.

I hope you like this bot🥰.

Greetings from pais.`
    bot.telegram.sendMessage(ctx.chat.id, text,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Pais🙋🏻‍♂️', url: 'http://t.me/Paiisse'},
                        { text: 'WABot🤖', url: 'wa.me/6287771818443'},
                        { text: 'Donate🥸', callback_data: 'donasi'},
                    ],
                    [
                        { text: 'Back!🔙', callback_data: 'start'}
                    ]
                ]
            },
            parse_mode: "Markdown"
        })
}
function sendDonation(ctx){
    const tmenu = `●▬▬▬▬▬ஜ𝐃𝐨𝐧𝐚𝐭𝐞ஜ▬▬▬▬▬●

Glad to hear that you wanted to donate to pais. All donations will help and motivate him to make me better in the future.

If you really want to donate, here are the methods available:

• DANA / GOPAY
⤷ 685805609094

• Indosat Credit
⤷ 685805609094

Very Thanks for Your donation. 😁


` 
    bot.telegram.sendMessage(ctx.chat.id, tmenu ,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back!🔙', callback_data: 'info'},
                    { text: 'Pais', url: 'http://t.me/Paiisse'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
}
function sendMessageMenu(ctx){
    const tmenu = `●▬▬▬▬▬▬ஜ𝐌𝐞𝐧𝐮ஜ▬▬▬▬▬▬●

Select one of the blocks below:
` 
    bot.telegram.sendMessage(ctx.chat.id, tmenu ,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Download Menu📥', callback_data: 'download'},
                    { text: 'Music Menu🎶', callback_data: 'music'}
                ],
                [
                    { text: 'Edu Menu🔍', callback_data: 'news'},
                    { text: 'Other menu🧮', callback_data: 'etc'}
                ],
                [
                    { text: 'Back!🔙', callback_data: 'start'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
}

function sendMessageping(ctx){
    function format(seconds){
        function pad(s){
        return (s < 10 ? `0` : ``) + s;
        }
        var hours = Math.floor(seconds / (60*60));
         var minutes = Math.floor(seconds % (60*60) / 60);
         var seconds = Math.floor(seconds % 60);

         return pad(hours) + ` H,` + pad(minutes) + ` M,` + pad(seconds) + ` S`;
          }

        var uptime = process.uptime();
    const timestamp = speed();
    const latensi = speed() - timestamp
    const tutid = moment().millisecond()
    const tmenu = `⍟▬▬▬▬▬ஜ𝘽𝙤𝙩 𝙄𝙣𝙛𝙤ஜ▬▬▬▬▬⍟

» ｢ 𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨 ｣
 ➪ *Host* : _${os.hostname()}_
 ➪ *Platfrom* : _${os.platform()}_
 ➪ *CPU* : _${os.cpus()[0].model}_
 ➪ *Speed* : _${os.cpus()[0].speed} MHz_ 
 ➪ *Core* : _${os.cpus().length}_
 ➪ *Penggunaan RAM* : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_
 
 ❒ Ping : *${tutid}MS*
 ❒ Runtime : *${format(uptime)}*
 ❒ _Speed_  *${latensi.toFixed(4)}* _Second_🚀

 ` 
    bot.telegram.sendMessage(ctx.chat.id, tmenu ,
    {
        reply_markup: {
            inline_keyboard:[
                [
                    { text: 'Back!🔙', callback_data: 'start'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
}


        /* Command */

bot.action('donasi', (ctx) =>{
    ctx.deleteMessage()
    sendDonation(ctx)
})
bot.action('info', (ctx) => {
    ctx.deleteMessage()
    sendInfo(ctx)
})

bot.action('ping', (ctx) => {
    ctx.deleteMessage()
    sendMessageping(ctx)
})

bot.command('tod', (ctx) => {
    console.log(ctx)
})

bot.action('start', (ctx) => {
    ctx.deleteMessage()
    sendMessageStart(ctx)
})
bot.start((ctx) => {
    ctx.deleteMessage()
    sendMessageStart(ctx)
})

bot.action('menu', (ctx) => {
    ctx.deleteMessage()
    sendMessageMenu(ctx)
})

bot.command('menu', (ctx) => {
    ctx.deleteMessage()
    sendMessageStart(ctx)
})

            /* Di atas yg make func */

bot.action('etc', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿──────⌈ 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 ⌋──────✿
    
❏ /truthid \`< The truth challenge ind >\`
❏ /nulis \`< Write in books >\`
❏ /tolol \`< Idiot certificate >\``,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back!🔙', callback_data: 'menu'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
})

bot.action('download', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿────⌈ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 ⌋────✿
    
❏ /tiktok \`< Tiktok download NoWM >\`
❏ /ytmp3 \`< Download ytmp3 >\`
❏ /ytvideo \`< Download yt vIdeo >\`
`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back!🔙', callback_data: 'menu'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
})

bot.action('music', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿─────⌈ 𝐌𝐮𝐬𝐢𝐜 𝐌𝐞𝐧𝐮 ⌋─────✿
    
❏ /joox \`< Joox Music >\`
❏ /play \`< Play music >\`
`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back!🔙', callback_data: 'menu'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
})

bot.action('news', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿─────⌈ 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐌𝐞𝐧𝐮 ⌋─────✿
    
❏ /merdeka \`< Random news from merdeka.com >\`
❏ /wikipedia \`< Information from wikipedia >\`
❏ /gempa \`< Earthquake >\`
❏ /corona \`< World corona information >\`
❏ /coronaind \`< Indonesia corona information >\`
❏ /pinterest \`< Random pinterest >\`
`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back!🔙', callback_data: 'menu'}
                ]
            ]
        },
        parse_mode: "Markdown"
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bot.use((ctx, next) => {
//     console.log(ctx.from)
//     if(ctx.updateSubTypes == "text"){
//         console.log(ctx.from.username + " mengatakan: " + ctx.message.text)
//     }else{
//         console.log(ctx.from.username + " mengirim: " + ctx.updateSubTypes)
//     }
//     next()
// })


                /* Fitur */


bot.command('truthid', (ctx) => {
    axios.get (`https://pencarikode.xyz/api/truthid?apikey=${paisKey}`)
    .then(res => {
        // console.log(res.data.message)
        ctx.reply(res.data.message)
    }).catch(e => {
        console.log(e)
    })

    })

    /* Education Fiture */
bot.command('merdeka', async (ctx) => {
        try{
        sendsearch(ctx)
        const link = await axios.get (`https://pencarikode.xyz/news/merdeka?apikey=${paisKey}`)
        const linke = link.data.result
        const random = linke[Math.floor(Math.random() * (linke.length))]
        ctx.replyWithPhoto({ url: random.thumb}, { caption: `──────✿ 𝐍𝐞𝐰𝐬 ✿──────\n\n❖ Title: ${random.judul}\n\n❖ Update: ${random.uptime}\n\n❖ *Url : ${random.link}`})
        
        }catch(e){
            messageError(ctx)
        }
})

bot.command('coronaind', async (ctx) =>{
    try{
    const date = await axios.get (`http://lolhuman.herokuapp.com/api/corona/indonesia?apikey=${lolKey}`)
    const data = date.data.result
    ctx.reply(`──────✿ 𝐂𝐨𝐫𝐨𝐧𝐚 ✿──────

❖ Positif: ${data.positif}
❖ Healed: ${data.sembuh}
❖ Be treated: ${data.dirawat}
❖ Died: ${data.meninggal}`)
    }catch(e){
        messageError(ctx)
    }
})

bot.command('corona', async (ctx) =>{
    try{
    const date = await axios.get (`http://lolhuman.herokuapp.com/api/corona/global?apikey=${lolKey}`)
    const data = date.data.result
    ctx.reply(`──────✿ 𝐂𝐨𝐫𝐨𝐧𝐚 ✿──────

❖ Positif: ${data.positif}
❖ Healed: ${data.sembuh}
❖ Be treated: ${data.dirawat}
❖ Died: ${data.meninggal}`)
    }catch(e){
        messageError(ctx)
    }
})

bot.command('gempa', async (ctx) => {
    sendProses(ctx)
    try{
    const datae = await axios.get(`http://lolhuman.herokuapp.com/api/infogempa?apikey=${lolKey}`)
    const data = datae.data.result
    ctx.replyWithPhoto({url: data.map}, {caption: `──────✿ 𝐆𝐞𝐦𝐩𝐚 ✿──────

❖ Location: ${data.lokasi}
❖ Time: ${data.waktu}
❖ Coordinates: ${data.koordinat}
❖ Potensi: ${data.potensi}
❖ Magnitude: ${data.magnitude}
❖ depth: ${data.kedalaman}
    `})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('hentai', (ctx) => {
        try{
        const SN = GenerateSerialNumber(jsjs)
        sendsearch(ctx)
        ctx.replyWithPhoto(`https://pencarikode.xyz/nsfw/hentai?apikey=${paisKey}&api=${SN}`)
        }catch(e){
            messageError(ctx)
        }
})


            /* Other Fiture */

bot.command('tolol', async (ctx) => {
        let input = ctx.message.text
        let inputArray = input.split(" ")
        let message = "";
        
        if(inputArray.length == 1){
            message = "Please enter text, for example: /tolol pais"
            ctx.reply(message)
        } else{
            sendProses(ctx)
            inputArray.shift();
            messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `https://tolol.ibnux.com/img.php?nama=${messager}&dl`}, {caption: `This certificate states that ${messager} is an idiot`})
        }catch(e){
            messageError(ctx)
        }
        }
})

bot.command('pinterest', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter text, for example: /pinterest alok"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            const dare = await axios.get(`https://api.vhtear.com/pinterest?query=${messager}&apikey=${vhKey}`)
            const datek = dare.data.result
            const data = datek[Math.floor(Math.random() * datek.length)]
            ctx.replyWithPhoto({url: data}, {caption: `Pinterest: ${messager}`})
        }catch(e){
            messageError(ctx)
        }
}
})

bot.command('ytsearch', async (ctx) => {
        let input = ctx.message.text
        let inputArray = input.split(" ")
        let message = "";
        
        if(inputArray.length == 1){
            message = "Please enter text, for example: /ytsearch snowman"
            ctx.reply(message)
        } else{
            sendProses(ctx)
            inputArray.shift();
            messager = inputArray.join(" ")
            try{
            const link = await axios.get (`http://lolhuman.herokuapp.com/api/ytsearch?apikey=${lolKey}&query=${messager}`)
            const { result } = link.data
            const hasil = result.slice(0, 3)
            hasil.forEach(async(res) => {
            ctx.replyWithPhoto({url: res.thumbnail}, {caption: `──────✿ 𝐒𝐞𝐚𝐫𝐜𝐡 ✿──────
        
❖ Title: ${res.title}
❖ Link: https://www.youtube.com/watch?v=${res.videoId}
❖ Published: ${res.published}
❖ Viewrs: ${res.views}

`})
             
                        })
            }catch(e){
                messageError(ctx)
            }
    }
})

            /* Music Fiture */
            
bot.command('play', async (ctx) => {
        let input = ctx.message.text
        let inputArray = input.split(" ")
        let message = "";
        
        if(inputArray.length == 1){
            message = "Harap masukan judul, Contoh /play snowman"
            ctx.reply(message)
        } else{
            sendsearch(ctx)
            inputArray.shift();
            messager = inputArray.join(" ")
            const date = await axios.get (`https://api.vhtear.com/ytmp3?query=${messager}&apikey=${vhKey}`)
            if(date.data.message){
                ctx.reply(`Music not found`)
            }else{
            const data = date.data.result
            ctx.replyWithPhoto({url: data.image}, {caption: `──────✿ 𝐏𝐥𝐚𝐲 ✿──────
            
❖ Title: ${data.title}
❖ DurationL ${data.duration}
❖ Size: ${data.size}
❖ Ext: ${data.ext}
❖ Id: ${data.id}
            `})
            if (Number(data.size.split(` MB`)[0]) >= 25.00) return ctx.reply(`Sorry the bot cannot send more than 25 MB!`)
            sendLoading(ctx)
            ctx.replyWithAudio({ url: data.mp3})
            } 
        }
})

bot.command('ytvideo', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter a link, an example /ytvideo https://www.youtube.com/watch?v=U5TkJ2HhMEw&list=RDen9KJdbrZj0&index=27"
        ctx.reply(message)
    } else{
        sendsearch(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        const date = await axios.get (`http://lolhuman.herokuapp.com/api/ytvideo?apikey=${lolKey}&url=${messager}`)
        const data = date.data.result
        if(!data){
            ctx.reply(`Music not found`)
        }else{
        ctx.replyWithPhoto({url: data.thumbnail}, {caption: `──────✿ 𝐏𝐥𝐚𝐲 ✿──────
        
❖ Title: ${data.title}
❖ Uploader: ${data.uploader}
❖ DurationL ${data.duration}
❖ View: ${data.view}
❖ Like: ${data.like}
❖ Dislike: ${data.dislike}
        `})
        if (Number(data.link[0].size.split(` MB`)[0]) >= 25.00) return ctx.reply(`Sorry the bot cannot send more than 25 MB!`)
        sendLoading(ctx)
        // console.log(data.link[0].link)
        ctx.replyWithVideo({url: data.link[0].link})
        } 
    }
})


bot.command('ytmp3', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter a link, an example /ytmp3 https://www.youtube.com/watch?v=U5TkJ2HhMEw&list=RDen9KJdbrZj0&index=27"
        ctx.reply(message)
    } else{
        sendsearch(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        const date = await axios.get (`http://lolhuman.herokuapp.com/api/ytaudio?apikey=${lolKey}&url=${messager}`)
        const data = date.data.result
        if(!data){
            ctx.reply(`Music not found`)
        }else{
        ctx.replyWithPhoto({url: data.thumbnail}, {caption: `──────✿ 𝐏𝐥𝐚𝐲 ✿──────
        
❖ Title: ${data.title}
❖ Uploader: ${data.uploader}
❖ DurationL ${data.duration}
❖ View: ${data.view}
❖ Like: ${data.like}
❖ Dislike: ${data.dislike}
❖ Size: ${data.link[0].size}
        `})
        if (Number(data.link[0].size.split(` MB`)[0]) >= 25.00) return ctx.reply(`Sorry the bot cannot send more than 25 MB!`)
        sendLoading(ctx)
        // console.log(data.link[0].link)
        ctx.replyWithAudio({ url: data.link[0].link}, {title: data.title, thumb: data.thumbnail, artist: data.title})
        } 
    }
})

bot.command('joox', async (ctx) => {
        let input = ctx.message.text
        let inputArray = input.split(" ")
        let message = "";
        
        if(inputArray.length == 1){
            message = "Harap masukan judul, Contoh /joox see you again"
            ctx.reply(message)
        } else{
            sendsearch(ctx)
            inputArray.shift();
            messager = inputArray.join(" ")
            const linke = await axios.get(`https://pencarikode.xyz/download/joox?search=${messager}&apikey=${paisKey}`)
            const link = linke.data.result
            if(!link.mp3_url){
                ctx.reply(`Song not found!`)
            }else{
            ctx.replyWithPhoto({ url: link.img_url}, { caption: `──────✿ 𝐉𝐨𝐨𝐱 ✿──────

❖ Title: ${link.judul}
❖ Artist: ${link.artist}
❖ Album: ${link.album}
❖ Size: ${link.filesize}
❖ ext: ${link.ext}
❖ duration: ${link.duration}`})
            sendLoading(ctx)
            ctx.replyWithAudio({ url: link.mp3_url})
            }
        }
})

            /* Download Fiture */


bot.command('tiktok', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /tiktok https://www.tiktok.com/@baldybrobryzxz/video/6929750087862078721"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        const linke = await axios.get(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolKey}&url=${messager}`)
        const linko = linke.data.result
        ctx.reply(`──────✿ 𝐓𝐢𝐤𝐭𝐨𝐤 ✿──────
        
❖ Tiktok: ${linko.title}
❖ Desc: ${linko.description}

❖ Note: Video is being sent`)
        ctx.replyWithVideo({url: linko.link})
        }catch(e){
            ctx.reply(`Video not found / wrong link!`)
        }
    }
})


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
