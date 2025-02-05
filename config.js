import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from 'cheerio';
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"

global.owner = [
["595971490733", 'Juan-66', true],
["5214774444444", '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈']]

global.mods = []
global.prems = []

global.IDJadibts = true

global.isBaileysFail = false

global.obtenerQrWeb = 0; 
global.keepAliveRender = 0;
global.botNumberCode = ""
global.confirmCode = ""
global.lenguajeID = es
global.mid = esDefault
global.version_language = '1.0 (MID-GB)'

global.Key360 = ["IDragons"] 
global.openai_key = 'sk-0' 
// platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3'
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV3"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

global.official = [
["595971490733", 'Juan-66', 1],
["593968263524", 'Gata Dios 💻', 1]]

global.mail = ''
global.desc = ''
global.desc2 = ''
global.country = ''

global.packname = `ID`
global.author = `Juan-66`

global.vs = "1.0"
global.vsJB = "5.0 (Beta)"
global.gt = "ID-Bot"

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = eg

global.wm = "ID-Bot : The Sixtensix"
global.igfg = "ID-Bot"
global.nomorown = "595971490733"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
}}}


global.multiplier = 65

global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeID.eDiamante(),
      exp: lenguajeID.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeID.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeID.eMagia(),
      joincount: lenguajeID.eToken(),
      emerald: lenguajeID.eEsmeralda(),
      stamina: lenguajeID.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeID.eOro(),
      
      trash: lenguajeID.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeID.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeID.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeID.eHierro(),
      rock: lenguajeID.eRoca(),
      potion: lenguajeID.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeID.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeID.eEspada(),
      
      common: lenguajeID.eCComun(),
      uncoommon: lenguajeID.ePComun(),
      mythic: lenguajeID.eCMistica(),
      legendary: lenguajeID.eClegendaria(),
      petFood: lenguajeID.eAMascots(), //?
      pet: lenguajeID.eCMascota(),//?
      
      bibitanggur: lenguajeID.eSUva(), bibitapel: lenguajeID.eSManzana(), bibitjeruk: lenguajeID.eSNaranja(), bibitmangga: lenguajeID.eSMango(), bibitpisang: lenguajeID.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeID.eGato(),    
      centaur: lenguajeID.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeID.ePerro(),
      dragon: lenguajeID.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeID.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeID.eAve(),
      horse: lenguajeID.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeID.eDiscoCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeID.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = {
emoticon(string) {
string = string.toLowerCase();
let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}

global.rpgshop = {
emoticon(string) {
string = string.toLowerCase();
let emottt = {
      exp: lenguajeID.eExp(), limit: lenguajeID.eDiamante(), diamond: lenguajeID.eDiamantePlus(), joincount: lenguajeID.eToken(),
      emerald: lenguajeID.eEsmeralda(), berlian: lenguajeID.eJoya(), kyubi: lenguajeID.eMagia(), gold: lenguajeID.eOro(),
      money: lenguajeID.eDiscoCoins(), tiketcoin: lenguajeID.eDiscoTickers(), stamina: lenguajeID.eEnergia(),
            
      potion: lenguajeID.ePocion(), aqua: lenguajeID.eAgua(), trash: lenguajeID.eBasura(), wood: lenguajeID.eMadera(),
      rock: lenguajeID.eRoca(), batu: lenguajeID.ePiedra(), string: lenguajeID.eCuerda(), iron: lenguajeID.eHierro(),
      coal: lenguajeID.eCarbon(), botol: lenguajeID.eBotella(), kaleng: lenguajeID.eLata(), kardus: lenguajeID.eCarton(),
      
      eleksirb: lenguajeID.eEletric(), emasbatang: lenguajeID.eBarraOro(), emasbiasa: lenguajeID.eOroComun(), rubah: lenguajeID.eZorroG(),
      sampah: lenguajeID.eBasuraG(), serigala: lenguajeID.eLoboG(), kayu: lenguajeID.eMaderaG(), sword: lenguajeID.eEspada(),
      umpan: lenguajeID.eCarnada(), healtmonster: lenguajeID.eBillete(), emas: lenguajeID.ePinata(), pancingan: lenguajeID.eGancho(),
      pancing: lenguajeID.eCanaPescar(),
       
      common: lenguajeID.eCComun(), uncoommon: lenguajeID.ePComun(), mythic: lenguajeID.eCMistica(),
      pet: lenguajeID.eCMascota(),//?
      gardenboxs: lenguajeID.eCJardineria(),//?
      legendary: lenguajeID.eClegendaria(),
      
      anggur: lenguajeID.eUva(), apel: lenguajeID.eManzana(), jeruk: lenguajeID.eNaranja(), mangga: lenguajeID.eMango(), pisang: lenguajeID.ePlatano(),
      
      bibitanggur: lenguajeID.eSUva(), bibitapel: lenguajeID.eSManzana(), bibitjeruk: lenguajeID.eSNaranja(), bibitmangga: lenguajeID.eSMango(), bibitpisang: lenguajeID.eSPlatano(),
      
      centaur: lenguajeID.eCentauro(), griffin: lenguajeID.eAve(), kucing: lenguajeID.eGato(), naga: lenguajeID.eDragon(),
      fox: lenguajeID.eZorro(), kuda: lenguajeID.eCaballo(), phonix: lenguajeID.eFenix(), wolf: lenguajeID.eLobo(),
      anjing: lenguajeID.ePerro(),
 
      petFood: lenguajeID.eAMascots(), //?
      makanancentaur: lenguajeID.eCCentauro(), makanangriffin: lenguajeID.eCAve(),
      makanankyubi: lenguajeID.eCMagica(), makanannaga: lenguajeID.eCDragon(), makananpet: lenguajeID.eACaballo(), makananphonix: lenguajeID.eCFenix()
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { 
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}

global.ch = {
ch1: '120363336642332098@newsletter',
ch2: '120363160031023229@newsletter',
ch3: '120363169294281316@newsletter',
ch4: '120363203805910750@newsletter',
ch5: '120363302472386010@newsletter',
ch6: '120363301598733462@newsletter',
ch7: '120363190430436554@newsletter',
ch8: '120363374372683775@newsletter', 
ch9: '120363167110224268@newsletter',
ch10: '120363323882134704@newsletter',
ch11: '120363370415738881@newsletter',
ch12: '120363385983031660@newsletter',
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})

global.yt = 'https://youtube.com/@juan_car'
global.ig = 'https://www.instagram.com/juan_car__19'
global.md = 'https://github.com/Juan-66/ID-Bot'
global.fb = 'https://www.facebook.com/groups/872989990425789'
global.tk = 'https://www.tiktok.com/@cardozo._.juan'
global.ths = 'https://www.threads.net/@juan_car__19'
global.paypal = 'https://paypal.me/OficialGD'
global.asistencia = 'https://wa.me/message/MEKOUFBEOG5ED1'
global.all = 'https://www.atom.bio/GataBot'
global.canal1 = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A'
global.canal2 = 'https://whatsapp.com/channel/0029Va6yY0iLY6d6XDmqA03g'
global.canal3 = 'https://whatsapp.com/channel/0029VaKn22pDJ6GwY61Ftn15'
global.canal4 = 'https://t.me/globalgb'

global.soporteID = "https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV"
global.grupo1 = "https://chat.whatsapp.com/KNwcGS4PCEN5qjbHD5VDZM"
global.grupo2 = "https://chat.whatsapp.com/LfcjmLcYax431QXBO0CSPk"
global.grupo_collab1 = "https://chat.whatsapp.com/IO5k0UOF7hOJHE1eH3Fcxh"
global.grupo_collab2 = "https://chat.whatsapp.com/GFsgXW2VD4I4FEOSlEg9wp"
global.grupo_collab3 = "https://chat.whatsapp.com/H1TEBeMtFVv3RcayD1WfGU"
global.grupo_collab4 = "https://chat.whatsapp.com/LuD3YzdOjH16LUwPPCVmL6"
