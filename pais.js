const { Telegraf } = require('telegraf')
const axios = require('axios')
const updateLogger = require('telegraf-update-logger');
const chalk = require('chalk');
const { Extra } = require('telegraf')
const os = require('os') 
const moment = require(`moment-timezone`)
const speed = require(`performance-now`);
const fs = require('fs');
const { createGzip } = require('zlib');

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
        }, 10 *  250)})
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
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
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
            var tampilTanggal = "*Tgl :* " + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "*Time :* " + jam + ":" + menit + ":" + detik + " Wib⌚";
    const tm = `●▬▬▬▬▬ஜ۩ஜ▬▬▬▬▬●

❖ Name : *${ctx.botInfo.first_name}*
❖ Version : \`1.0.0\`
❖ Owner : *Pais*

❖ *Note:* \`This bot is still under development, and for me to learn to make a bot\`

- Req Fiture?, Chat pais
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
    const text = `●▬▬▬▬ஜ𝐈𝐧𝐟𝐨ஜ▬▬▬▬●

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
    const tmenu = `●▬▬▬▬ஜ𝐃𝐨𝐧𝐚𝐭𝐞ஜ▬▬▬▬●

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
    const tmenu = `●▬▬▬ஜ𝐌𝐞𝐧𝐮ஜ▬▬▬●

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
                    { text: 'Anime 🧸', callback_data: 'anime'},
                    { text: 'Text Maker🖼', callback_data: 'textmaker'}
                ],
                [
                    { text: 'Stalk Menu🔎', callback_data: 'stalk'},
                    { text: 'Random Menu🔫', callback_data: 'random'}
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
    const tmenu = `⍟▬▬▬ஜ𝘽𝙤𝙩 𝙄𝙣𝙛𝙤ஜ▬▬▬⍟

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
    bot.telegram.sendMessage(ctx.chat.id, `✿────⌈ 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 ⌋────✿
    
❏ /truthid 
❏ /nulis 
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

bot.action('stalk', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿────⌈ 𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮 ⌋────✿
    
❏ /igstalk 
❏ /githubstalk
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


bot.action('textmaker', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿────⌈ 𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 ⌋────✿
    
❏ /bp 
❏ /shadow 
❏ /tolol
❏ /codwarzone 
❏ /coffe
❏ /bannerlol 

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

bot.action('download', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿───⌈ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 ⌋───✿

❏ /tiktok 
❏ /tiktoknowm 
❏ /ytmp3 
❏ /ytvideo 
❏ /ytsearch 
❏ /xnxx 

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
    bot.telegram.sendMessage(ctx.chat.id, `✿───⌈ 𝐌𝐮𝐬𝐢𝐜 𝐌𝐞𝐧𝐮 ⌋───✿
    
❏ /joox 
❏ /jooxplus 
❏ /play 
❏ /lyric 
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
    
❏ /merdeka 
❏ /wikipedia 
❏ /gempa 
❏ /corona 
❏ /coronaind 
❏ /pinterest 
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

bot.action('anime', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿──⌈ 𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮 ⌋──✿
  
❏ /animesearch 
❏ /loli
❏ /elf
❏ /neko
❏ /waifu
❏ /husbu
❏ /shota
❏ /sagiri
❏ /shinobu
❏ /megumin
❏ /wallnime
❏ /yaoi
❏ /ecchi
❏ /ahegao
❏ /hentai 
❏ /nsfwloli 
❏ /nsfwneko 
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

bot.action('random', (ctx) => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, `✿──⌈ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮 ⌋──✿
  
❏ /blackpink
❏ /exo
❏ /bts
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

bot.command('contoh', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "masuin text"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        ctx.reply(messager)
    }
})


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

            /* Other Fiture */

bot.command('nulis', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter text, for example: /nulis pais"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/nulis?apikey=${lolKey}&text=${messager}`})
    }
})
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

bot.command('lyric', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Harap masukan judul, Contoh /lyric see you again"
        ctx.reply(message)
    } else{
        sendsearch(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        const linke = await axios.get(`http://lolhuman.herokuapp.com/api/lirik?apikey=${lolKey}&query=${messager}`)
        const link = linke.data.result
        if(!link){
            ctx.reply(`Song not found!`)
        }else{
        ctx.reply(link)
      }  }
})

bot.command('jooxplus', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Harap masukan judul, Contoh /jooxplus snowman"
        ctx.reply(message)
    } else{
        sendsearch(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        const linke = await axios.get(`http://lolhuman.herokuapp.com/api/jooxplay?apikey=${lolKey}&query=${messager}`)
        const link = linke.data.result
        if(!link.image){
            ctx.reply(`Song not found!`)
        }else{
        ctx.replyWithPhoto({ url: link.image}, { caption: `──────✿ 𝐉𝐨𝐨𝐱 ✿──────

❖ Song: ${link.info.song}
❖ Singer: ${link.info.singer}
❖ Album: ${link.info.album}
❖ Size: ${link.audio[2].size}
❖ duration: ${link.info.duration}

`}) 

        await sleep(1000) 
        ctx.reply(`❖ Lirik: ${link.lirik}`)
        sendLoading(ctx)
        ctx.replyWithAudio({ url: link.audio[2].link}, {thumb: link.image, album: link.info.album, artist: link.info.singer, duration: link.info.duration, title: link.info.song})
        }
    }
})

                /* Stalk Fiture */
bot.command('githubstalk', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Example: /githubstalk paiiss" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            const link = await axios.get(`https://pencarikode.xyz/stalk/github?q=${messager}&apikey=${paisKey}`)
            const data = link.data.result
            ctx.replyWithPhoto({url: data.avatar_url}, {caption: `──────✿ 𝐒𝐭𝐚𝐥𝐤 ✿──────

◈ User: ${data.username}
◈ Name: ${data.name}
◈ Id: ${data.id}
◈ Url: ${data.url}
◈ Type: ${data.type}
◈ Company: ${data.company}
◈ Blog: ${data.blog}
◈ Location: ${data.location}
◈ Email: ${data.email}
◈ Bio: ${data.bio}
◈ Twitter: ${data.twitter_username}
◈ Repos: ${data.public_repos}
◈ Follower: ${data.followers}
◈ Following: ${data.following}
◈ Create: ${data.created_at}

`})
        }catch{
            ctx.reply(`Error!`)
        }  
    }
})
bot.command('igstalk', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Example: /igstalk fera_jelita" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        const link = await axios.get(`https://pencarikode.xyz/stalk/instagram?username=${messager}&apikey=${paisKey}`)
        const data = link.data.result.user
        ctx.replyWithPhoto({url: data.hd_profile_pic_versions[0].url}, {caption: `──────✿ 𝐈𝐠𝐒𝐭𝐚𝐥𝐤 ✿──────
        
◈ UserName: ${data.username}
◈ Name: ${data.full_name}
◈ Verified: ${data.is_verified ? 'Yes' : 'No'}
◈ Post: ${data.media_count}
◈ Followers: ${data.follower_count}
◈ Following: ${data.following_count}
◈ Bio: ${data.biography}
◈ Category: ${data.category ? `${data.category}` : null}
◈ Url Bio: ${data.external_url ?  `${data.external_url}` : null }
◈ Totoal Igtv: ${data.total_igtv_videos}
◈ Business: ${data.is_business ? 'Yes' : 'No'}
◈ WhatsApp: ${data.whatsapp_number ? `${data.whatsapp_number}` : null}

`})
        }catch{
            ctx.reply(`User name Not Found/ User private account`)
        }
    }
})


            /* Download Fiture */

bot.command('facebook', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /facebook https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        sendLoading(ctx)
        const link = await axios.get(`http://lolhuman.herokuapp.com/api/facebook?apikey=${lolKey}&url=${messager}`)
        const { result } = link.data
        const hasil = result.slice(0, 5)
        hasil.forEach(async(res) => {
        if(res.type == "mp4"){
            ctx.replyWithVideo({url: res.link})
        }
        })
        }catch(e){
        ctx.reply(`Link not found / wrong link!`)
        }
    }
})

bot.command('tiktokmusic', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /tiktokmusic https://www.tiktok.com/@baldybrobryzxz/video/6929750087862078721"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        sendLoading(ctx)
        ctx.replyWithAudio({url: `http://lolhuman.herokuapp.com/api/tiktokmusic?apikey=${lolKey}&url=${messager}`}, {title: 'Pais'})
        }catch(e){
            ctx.reply(`Link not found / wrong link!`)
        }
    }
})

bot.command('tiktoknowm', async (ctx) => {
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
        await sleep(1000) 
        sendLoading(ctx)
        ctx.replyWithVideo({url: linko.link}, {caption: `──────✿ 𝐓𝐢𝐤𝐭𝐨𝐤 ✿──────
        
❖ Tiktok: ${linko.title}
❖ Desc: ${linko.description}`})
        }catch(e){
            ctx.reply(`Video not found / wrong link!`)
        }
    }
})

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
            ctx.replyWithVideo({url: `http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lolKey}&url=${messager}`})
        }catch(e){
            ctx.reply(`Video not found / wrong link!`)
        }
    }
})


            // 18 ++++++ //

bot.command('doujindesu', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter text, for example: /doujindesu https://doujindesu.info/2021/01/18/queen-bee-chapter-33/"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        const link = await axios.get(`http://lolhuman.herokuapp.com/api/doujindesu?apikey=${lolKey}&url=${messager}`)
        const { result } = link.data
        const hasil = result
        result.forEach(async(res) => {
        ctx.replyWithPhoto(res.image)
        })
        
    }
})

bot.command('xnxx', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Enter the link, for example /xnxx https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
    try{
        const link = await axios.get(`http://lolhuman.herokuapp.com/api/xnxx?apikey=${lolKey}&url=${messager}`)
        const data = link.data.result
        ctx.replyWithPhoto({url: data.thumbnail}, {caption: `─────✿ 𝐱𝐧𝐱𝐱 ✿─────

❖ Title: ${data.title}
❖ Duration: ${data.duration}
❖ View: ${data.view}
❖ Rating: ${data.rating}
❖ Like: ${data.like}
❖ Dislike: ${data.dislike}
❖ comment: ${data.comment}

❖ Tag: ${data.tag}

❖ Desc: ${data.description}
        `})
        // console.log(data.link[2].link)
        await sleep(1000) 
        sendLoading(ctx)
        ctx.replyWithVideo({url: data.link[1].link})
    }catch(e){
        ctx.reply(`Video not found / wrong link!`)
        }
    }
})

            /* ANIME */

bot.command('animesearch', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Enter the search, for example /animesearch sao"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        const link = await axios.get (`http://lolhuman.herokuapp.com/api/anime?apikey=${lolKey}&query=${messager}`)
        const data = link.data.result
        ctx.replyWithPhoto({url: data.coverImage.large}, {caption: `─────✿ 𝐒𝐞𝐚𝐫𝐜𝐡 ✿─────

◈ Title: ${data.title.english}
◈ JPG: ${data.title.native}
◈ Id: ${data.id}
◈ Id Mal: ${data.idMal}
◈ Episodes: ${data.episodes}
◈ Format: ${data.format}
◈ Duration: ${data.duration}
◈ Season: ${data.season}
◈ Status: ${data.status}
◈ SeasonYear: ${data.seasonYear}
◈ Source: ${data.source}
◈ Genre: ${data.genres}
◈ Start Date: 
 - Year: ${data.startDate.year}
 - Moth: ${data.startDate.month}
 - Day: ${data.startDate.day} 
◈ End Date
 - Year: ${data.endDate.year}
 - Moth: ${data.endDate.month}
 - Day: ${data.endDate.day} 
◈ Description: ${data.description.replace('<br><br>', '\n\n')}
      `})
        }catch{
            messageError(ctx)
        }
    }
})

bot.command('hentai', async (ctx) => {
        try{
        sendsearch(ctx)
        ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/random/nsfw/waifu?apikey=${lolKey}`}, {caption: `Random hentai`})
        }catch(e){
            messageError(ctx)
        }
})

bot.command('nsfwneko', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/nsfw/neko?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Nsfw Neko`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('nsfwloli', async (ctx) => {
    try{
    sendsearch(ctx)
    ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/random/nsfw/loli?apikey=${lolKey}`}, {caption: `Random Nsfw Loli`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('loli', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/loli?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Loli`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('elf', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/elf?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Elf`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('neko', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/neko?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Neko`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('waifu', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/waifu?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Waifu`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('shota', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/shota?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Shota`})
    }catch(e){
        messageError(ctx)
    }
})


bot.command('husbu', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/husbu?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Husbu`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('sagiri', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`hhttp://lolhuman.herokuapp.com/api/random/sagiri?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Sagiri`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('shinobu', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/shinobu?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Shinobu`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('megumin', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/megumin?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Megumin`})
    }catch(e){
        messageError(ctx)
    }
})
 
bot.command('fanart', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/art?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Fanart`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('wallnime', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/wallnime?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random WallNime`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('yaoi', async (ctx) => {
    try{
    sendsearch(ctx)
    ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/random/nsfw/yaoi?apikey=${lolKey}`}, {caption: `Random Yaoi`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('ecchi', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/nsfw/ecchi?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Ecchi`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('ahegao', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/nsfw/ahegao?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Ahegao`})
    }catch(e){
        messageError(ctx)
    }
})


        /* Random Fiture */

bot.command('bts', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/bts?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Bts`})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('exo', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/exo?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Exo   `})
    }catch(e){
        messageError(ctx)
    }
})

bot.command('blackpink', async (ctx) => {
    try{
    sendsearch(ctx)
    const link = await axios.get(`http://lolhuman.herokuapp.com/api/random/blackpink?apikey=${lolKey}`)
    const data = link.data.result
    ctx.replyWithPhoto({url: data}, {caption: `Random Blackpink`})
    }catch(e){
        messageError(ctx)
    }
})

        /* Text Maker */

bot.command('shadow', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /shadow paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=${lolKey}&text=${messager}`}, {caption: `Shadow ${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('bp', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /bp paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('freefire', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /freefire paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/ephoto1/freefire?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('codwarzone', async (ctx) => {
    let input = ctx.message.text  
    const peak = input.trim().substring(input.indexOf(' ') + 1)
    if (peak.length >= 2) {
    const pais = peak.split(`|`)[0]
    const gans = peak.split(`|`)[1]
    if(!pais, !gans){
        ctx.reply('Please enter text, for example: /codwarzone pais|gans')
    }else{
    sendProses(ctx)
    ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey=${lolKey}&text1=${pais}&text2=${gans}`})
        }
    }else{
        ctx.reply(`Please enter a format like this, for example /codwarzone pais|gans`)
    }
})

bot.command('goldb', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /goldb paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/ephoto1/goldplaybutton?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('silverb', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /silverb  paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/ephoto1/silverplaybutton?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('coffe', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /coffe  paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/photooxy1/coffe?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})

bot.command('bannerlol', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /bannerlol  paiss"
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            ctx.replyWithPhoto({url: `http://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=${lolKey}&text=${messager}`})
        }catch(e){
            messageError(ctx)
        }
    }
})


bot.command('tes', async (ctx) => {
    let input = ctx.message.text  
    const peak = input.trim().substring(input.indexOf(' ') + 1)
    if (peak.length >= 2) {
    const pais = peak.split(`|`)[0]
    const gans = peak.split(`|`)[1]
    }
})
//ctx.reply(`err`)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
