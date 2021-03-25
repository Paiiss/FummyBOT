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
const { spawn, exec } = require('child_process')

// Load File
let setting = JSON.parse(fs.readFileSync(`./lib/setting.json`))

let {
    Token,
    paisKey,
    lolKey,
    vhKey,
    prefix,
    ownerbot
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
                case 0: waktoo = "Tengah Malam🌚 "; break;
                case 1: waktoo = "Tengah Malam🌒 "; break;
                case 2: waktoo = "Dini Hari🌒 "; break;
                case 3: waktoo = "Dini Hari🌓 "; break;
                case 4: waktoo = "Subuh🌔 "; break;
                case 5: waktoo = "Subuh🌔 "; break;
                case 6: waktoo = "Pagi🌝 "; break;
                case 7: waktoo = "Pagi🌝 "; break;
                case 8: waktoo = "Pagi🌝 "; break;
                case 9: waktoo = "Pagi  "; break;
                case 10: waktoo = "Pagi🌞 "; break;
                case 11: waktoo = "Siang🌞 "; break;
                case 12: waktoo = "Siang🌞 "; break;
                case 13: waktoo = "Siang🌞 "; break;
                case 14: waktoo = "Siang🌞 "; break;
                case 15: waktoo = "Sore🌝 "; break;
                case 16: waktoo = "Sore🌝 "; break;
                case 17: waktoo = "Sore🌖 "; break;
                case 18: waktoo = "Magrib🌘 "; break;
                case 19: waktoo = "Magrib🌚 "; break;
                case 20: waktoo = "Malam🌚 "; break;
                case 21: waktoo = "Malam🌚 "; break;
                case 22: waktoo = "Malam🌚 "; break;
                case 23: waktoo = "Tengah Malam🌚 "; break;
            }
            var tampilTanggal = "*Tgl :* " + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "*" + waktoo+ "*" + ", " + "*Jam :* " + jam + ":" + menit + ":" + detik + " Wib";

    // Credit ny jgn di ilangin ya ^_^

    const tm = `●▬▬▬▬▬ஜ۩ஜ▬▬▬▬▬●

❖ NameBot : *${ctx.botInfo.first_name}*
❖ Version : \`2.0.0\`
❖ Owner : *${ownerbot}*

- * Req Fiture?, Chat* [pais](http://t.me/Paiisse)

❖ ${tampilTanggal}
❖ ${tampilWaktu}

❖ *Note:* \`This bot script is open source, link:\` [FummyBOT](https://github.com/Paiiss/FummyBOT) by [PAIS](http://t.me/Paiisse)

❖ Thanks to: 
- Pais
- Lolhum
- Ben
- Aldi :v
- And my friends

❖ Rest-api in use:
- [Pais-Api](http://pencarikode.xyz/)
- [Lolhuman](http://api.lolhuman.xyz/)
- [Vhtear](https://vhtear.com/)
- [ZeksApi](https://api.zeks.xyz/)


ㅤㅤㅤㅤㅤㅤ╭∩╮ʕ•ᴥ•ʔ╭∩╮
ㅤㅤㅤㅤㅤㅤㅤㅤ@𝓟𝓪𝓲𝓼
ㅤㅤㅤㅤㅤㅤㅤ⌤⌤⌤⌤⌤
`
        
    // Credit ny jgn di ilangin ya ^_^
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
        parse_mode: "Markdown",
        disable_web_page_preview: "true" 
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

Bot menu by: ${ownerbot}💞

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
    

    {prefix}truthid 
❏ ${prefix}nulis 
❏ ${prefix}nickml
❏ ${prefix}short
❏ ${prefix}spam1
❏ ${prefix}artinama
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
    
❏ ${prefix}igstalk 
❏ ${prefix}githubstalk
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
    
❏ ${prefix}bp 
❏ ${prefix}shadow 
❏ ${prefix}tolol
❏ ${prefix}codwarzone 
❏ ${prefix}coffe
❏ ${prefix}bannerlol 

❏ ${prefix}maker ( Read how to use )

❏ ${prefix}ttp
❏ ${prefix}ttp2
❏ ${prefix}ttp3
❏ ${prefix}ttp4

❏ ${prefix}harta

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

❏ ${prefix}tiktok 
❏ ${prefix}tiktoknowm 
❏ ${prefix}ytmp3 
❏ ${prefix}ytvideo 
❏ ${prefix}ytsearch 
❏ ${prefix}xnxx 
❏ ${prefix}instagram

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
    
❏ ${prefix}joox 
❏ ${prefix}jooxplus 
❏ ${prefix}play 
❏ ${prefix}lyric 
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
    
❏ ${prefix}merdeka 
❏ ${prefix}wikipedia 
❏ ${prefix}gempa 
❏ ${prefix}corona 
❏ ${prefix}coronaind 
❏ ${prefix}pinterest 
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
  
❏ ${prefix}animesearch 
❏ ${prefix}loli
❏ ${prefix}elf
❏ ${prefix}neko
❏ ${prefix}waifu
❏ ${prefix}husbu
❏ ${prefix}shota
❏ ${prefix}sagiri
❏ ${prefix}shinobu
❏ ${prefix}megumin
❏ ${prefix}wallnime
❏ ${prefix}yaoi
❏ ${prefix}ecchi
❏ ${prefix}ahegao
❏ ${prefix}hentai 
❏ ${prefix}nsfwloli 
❏ ${prefix}nsfwneko 
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
  
❏ ${prefix}blackpink
❏ ${prefix}exo
❏ ${prefix}bts
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

bot.command('nulif', async (ctx) => {
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

bot.command('twitter', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /twitter https://twitter.com/gofoodindonesia/status/1229369819511709697" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        sendLoading(ctx)
        const link = await axios.get(`http://lolhuman.herokuapp.com/api/twitter?apikey=${lolKey}&url=${messager}`)
        const { result } = link.data
        const hasil = result
        ctx.replyWithVideo({url: result[0].link})
        }catch(e){
        ctx.reply(`Link not found / wrong link!`)
        }
    }
})

bot.command('instagram', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /instagram https://www.instagram.com/p/CLSIkIOh0ad/?utm_source=ig_web_copy_link" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        // console.log(messager)
        // try{
        sendLoading(ctx)
        const link = await axios.get(`https://pencarikode.xyz/api/ig?url=${messager}&apikey=${paisKey}`)
        const result = link.data.result.data
        // const hasill = result
        // console.log(result)
        result.forEach((res) => {
            
        // console.log(hasil)
        if(res.type == 'image'){
        ctx.replyWithPhoto({url: res.data})

        } else {
            console.log('video')
            ctx.replyWithVideo({url: res.data})
        }
        
        })
        // }catch(e){
        // ctx.reply(`Link not found / wrong link!`)
        // }
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

bot.on('text', async pais => {
    
    let body = pais.update.message.text || ''
    const command = body.split(' ')[0]
    const isCmd = body.startsWith('/')
    const arg = body.slice(command.length + 1)
    const arg1 = arg.split(`|`)[0]
    const arg2 = arg.split(`|`)[1]
    const arg3 = arg.split(`|`)[2]

    switch(command){

    case prefix + 'spam1':
        if(!arg) return pais.reply(`Please input number phone`)
        try{
            linkspam = await axios.get(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolKey}&nomor=${arg}`)
            console.log('Sukses mengirim spam ke nomor '+ arg)
            pais.reply(`Successfully sent spam to number ${arg}🤝🏻`)
        } catch(e){
            console.log('Gagal mengirim spam ke nomor '+ arg)
            pais.reply(`Failed to spam number ${arg} 😔`)
        }
        break
    case prefix + 'short':
        if(!arg) return pais.reply(`Please enter the link, for example /short https://pencarikode.xyz`)
        try{
            link = await axios.get (`http://api.lolhuman.xyz/api/shortlink?apikey=${lolKey}&url=${arg}`)
            url = link.data.result
            console.log(`Succes short url: ${url}`)
            pais.reply(`Short url: ${url}`)
        } catch(e){
            console.log(`Error Short ${arg}`)
            pais.reply(`Error Short ${arg}`)
        }
        break
    case prefix + 'mlnick': 
        if(!arg1, !arg2) return pais.reply(`Please input the format correctly, for example: ${prefix}mlnick 348553128|9436`)
        try{
            link = await axios.get(`http://api.lolhuman.xyz/api/mobilelegend/${arg1}/${arg2}?apikey=${lolKey}`)
            data = link.data.result
            console.log(`Succses nick: ${data}`)
            pais.reply(`Nick: ${data}`)
        } catch(e){
            pais.reply(`Something went wrong`)
            console.log(`nickml error!`)
        }
        break    
    case prefix + 'artinama':
        if(!arg) return pais.reply(`Please inpun name, Example: ${prefix}artinama pais`)
        try{
            link = await axios.get(`http://api.lolhuman.xyz/api/artinama?apikey=${lolKey}&nama=${arg}`)
            data = link.data.result
        pais.reply(data)
        } catch(e){
            pais.reply(`Error!, Please report to ${ownerbot}`)
            console.log(`Error artinama`)
        }
        break

        /* Image Maker */

        /* Text Maker */

    case prefix + 'maker':
        const ava = `\nAvailable themes:

❏ bp
❏ matrix
❏ ph
❏ cristmas
❏ winter
❏ sky
❏ sandwriting
❏ 1917
❏ marvel
❏ marvel2`
        if(arg1 == 'theme'){
            return pais.reply(`Please fill in the '(theme)' with the available themes\n${ava}`)
        }
        switch(arg1){
            case 'bp': themeurl = `https://pencarikode.xyz/api/textpro/blackpink?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'matrix': themeurl = `https://pencarikode.xyz/api/textpro/matrix?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'ph': themeurl = `https://pencarikode.xyz/api/textpro/phub?text=${arg2}2&text2=${arg3}&apikey=${paisKey}`; total = 3; break;
            case 'christmas': themeurl = `https://pencarikode.xyz/api/textpro/christmas?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'winter': themeurl = `https://pencarikode.xyz/api/textpro/winter?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'sky': themeurl = `https://pencarikode.xyz/api/textpro/sky?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'sandwriting': themeurl = `https://pencarikode.xyz/api/textpro/sand-writing?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case '1917': themeurl = `https://pencarikode.xyz/api/textpro/1917-style?text=${arg2}&apikey=${paisKey}`; total = 1; break;
            case 'marvel': themeurl = `https://pencarikode.xyz/api/textpro/marvel-studios?text=${arg2}&text2=${arg3}&apikey=${paisKey}`; total = 2; break;
            case 'marvel2': themeurl = `https://pencarikode.xyz/api/textpro/marvel-studios2?text=${arg2}&text2=${arg3}&apikey=${paisKey}`; total = 2; break;

            // case '': themeurl = ``; total = 1; break;

            default:
            return pais.reply(`Theme not found\n\nPlease enter text, for example: ${prefix}maker (theme)|Pais\n${ava}`)
            
        }
        

        if( total == 1) {
            if(!arg2)return pais.reply(`Please enter text, for example: ${prefix}maker ${arg1}|Pais`)
        }else {
             if(!arg2, !arg3) return pais.reply(`Please enter text, for example: ${prefix}maker ${arg1}|Pais|gans`)
        }
        // } else {
        //     if(!arg2, !arg3)pais.reply(`Please enter text, for example: ${prefix}maker ${arg1}|Pais|gans`)
        // }
        pais.replyWithPhoto(themeurl)

        break
    case prefix + 'trump':
        if(!arg) return pais.reply(`Please enter text, for example: ${prefix}thump pais gans`)
        try{
            pais.replyWithPhoto(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolKey}&text=${arg}`)
            pais.reply(`Succes to create`)
        }catch(e){
            pais.reply(`Failed to create`)
            console.log(`Fitur trump Error!`)
        }
        break
    case prefix + 'ttp':
        if(!arg) return pais.reply(`Please input text, Example: ${prefix}ttp pais`)
        try{
        pais.replyWithSticker({url: `http://api.lolhuman.xyz/api/ttp?apikey=${lolKey}&text=${arg}`})
        } catch(e){
            console.log('Error ttp1')
            pais.reply(`Error!, Please report to ${ownerbot}`)
        }
        break
    case prefix + 'ttp2':
        if(!arg) return pais.reply(`Please input text, Example: ${prefix}ttp2 pais`)
        try{
        pais.replyWithSticker({url: `http://api.lolhuman.xyz/api/ttp2?apikey=${lolKey}&text=${arg}`})
        } catch(e){
            console.log('Error ttp2')
            pais.reply(`Error!, Please report to ${ownerbot}`)
        }
        break
    case prefix + 'ttp3':
        if(!arg) return pais.reply(`Please input text, Example: ${prefix}ttp3 pais`)
        try{
        pais.replyWithSticker({url: `http://api.lolhuman.xyz/api/ttp3?apikey=${lolKey}&text=${arg}`})
        } catch(e){
            console.log('Error ttp3')
            pais.reply(`Error!, Please report to ${ownerbot}`)
        }
        break
    case prefix + 'ttp4':
        if(!arg) return pais.reply(`Please input text, Example: ${prefix}ttp4 pais`)
        try{
        pais.replyWithSticker({url: `http://api.lolhuman.xyz/api/ttp3?apikey=${lolKey}&text=${arg}`})
        } catch(e){
            console.log('Error ttp4')
            pais.reply(`Error!, Please report to ${ownerbot}`)
        }
        break
    case prefix + 'attp':
        if(!arg) return pais.reply(`Please input text, Example: ${prefix}ttp4 pais`)
        try{
        pais.replyWithSticker({url: `http://api.lolhuman.xyz/api/attp?apikey=${lolKey}&text=${arg}`})
        } catch(e){
            console.log('Error ttp4')
            pais.reply(`Error!, Please report to ${ownerbot}`)
        }
        break

    case prefix + 'nulis':
            if(!arg) return pais.reply(`Please input text, Example: ${prefix}nulis pais anak yang baik`)
            const diTulis = arg
            // const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
            // const panjangBaris = panjangKalimat.split('\n').slice(0, 28).join('\n')
            const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
                let Textpanjang = ''
lengthtext = 1
console.log(panjangKalimat)
 for (var i = 0; i < panjangKalimat.length; i++) { 
 if (i == 55*lengthtext){
     Textpanjang+= '\n'
     lengthtext++
      Textpanjang+= panjangKalimat[i]
   } else {
     Textpanjang+= panjangKalimat[i]
 }
 }
            // console.log(panjangBaris)
            spawn('convert', [
                './data/result.jpg',
                '-font',
                './data/font.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                Textpanjang,
                './data/pais/sipa.jpg'
            ])
            .on('error', () => pais.reply(`Error`))
            .on('exit', () => {
                // pais.replyWithPhoto('./data/pais/sipa.jpg')
                pais.replyWithPhoto({source: fs.createReadStream('./data/pais/sipa.jpg')})

            })
            break
    case prefix + `harta`:
            if(!arg) return pais.reply(`Please input text, Example: ${prefix}harta pais`)
            const textsss = arg
            const splitText = textsss.replace(/(\S+\s*){1,10}/g, `$&\n`)
            const fixHeight = splitText.toUpperCase() 
            const bglu = ['harta', 'harta2', 'harta3']
            const bg = bglu[Math.floor(Math.random() * bglu.length)]
            spawn(`convert`, [
                `-gravity`,
                `Center`,
                `-size`,
                `1280x1280`,
                `xc:black`,
                `-font`,
                `./data/harta.ttf`,
                `-pointsize`,
                `200`,
                `-tile`,
                `./data/${bg}.jpg`,
                `-annotate`,
                `+20+80`,
                fixHeight,
                `-wave`,
                `10x175`,
               `-crop`,
                `1000x850+0+0`,
                `./data/pais/${bg}.jpg`
            ])
            .on(`error`, () => pais.reply(from, `Error gan`, id))
            .on(`exit`, () => {
                pais.replyWithPhoto({source: fs.createReadStream(`./data/pais/${bg}.jpg`)})
            })
            break

    }
    })

//ctx.reply(`err`)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
