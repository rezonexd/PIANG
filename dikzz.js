/*
Base Whatsapp Bot
By Gx Dikzz

Sript bot WhatsApp ini adalah 100% buatan Gx Dikzz (YT: XDicaBot). 
 Script ini free tidak diperjual belikan.
 Bebas Rename, Jangan Hapus WM (dasar bocil rename)
 Jangaan lupa subscribe xdicabot

LU HATI-HATI DISINI, DISINI ADALAH TEMPAT DIMANA SEMUA FITUR BOT. LU BISA TAMBAH FITUR DISINI, AWAS JANGAN ASAL TAMBAH NTAR ERROR LU BINGUNG SENDIRI.

Youtube: @xdicabot
*/
require('./config');
const fs = require('fs');
const util = require('util')
const { exec } = require("child_process")
const os = require('os')
const logMessage = require('./logger')

module.exports = async (Dikzz, m) => {
  if (m.key.fromMe) return
await Dikzz.readMessages([m.key])
await Dikzz.sendPresenceUpdate('recording', m.chat)
await new Promise(resolve => setTimeout(resolve, 800))
await logMessage(m)
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Dikzz.user.id.split(':')[0]+'@s.whatsapp.net' || Dikzz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Dikzz.decodeJid(Dikzz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isOwner = global.owner
  .map(v => v + '@s.whatsapp.net')
  .includes(sender)
global.botMode = 'public';


//~~~~~Fitur Case~~~~~//
switch(command) {


case 'menu': case 'piang': {
  
    const isPremium = false; // ganti sesuai logika kamu
    const isOwner = true; // ganti sesuai logika kamu
    const userRole = isOwner ? 'Owner' : isPremium ? 'Premium' : 'User';

    const menuMessage = `
✨ *Hai Kak ${pushname}!* ✨
Aku adalah *${namabot}*, bot WhatsApp buatan *${wm}*.
Silahkan gunakan bot dengan bijak 😎
Saya masih tahap pengembangan ya...

━━━━━━━━━━━━━━━━━━━━
🤖 *INFO BOT*
🟢 Nama bot  : *${namabot}*
🟢 Versi    : 1.0
🟢 Owner    : @${global.owner[0]}
🟢 Developer: ${wm}

👤 *INFO USER*
🟡 Nama    : ${pushname}
🟡 Nomor   : ${senderNumber.split('@')[0]}
🟡 Role    : ${userRole}

━━━━━━━━━━━━━━━━━━━━
═══════ ✦ PIANG AI ✦ ═══════
        ❖ DAFTAR MENU ❖
════════════════════════════

✦ BOT
▸ .tes
▸ .ping
▸ .donasi
▸ .self
▸ .public

✦ GAME
▸ belum ada

✦ AI
▸ .aidikzz

✦ FUN
▸ .cekkontol   (nama/tag)
▸ .cekganteng  (nama/tag)
▸ .cekcantik   (nama/tag)
▸ .cekmati     (nama/tag)
▸ .ceksifat    (nama/tag)
▸ .cekkhodam   (nama/tag)

✦ LAINNYA
▸ belum ada
════════════════════════════

━━━━━━━━━━━━━━━━━━━━
🙏 *TQ TO:*
- Allah SWT
- Orang Tua
- Gx Dikzz Developer
- Baileys
- API
- Teman-teman semua
- User Bot
`;



   
    await Dikzz.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/11887/688378285_dikzz.jpg' },
        caption: menuMessage
    }, { quoted: m });

    
await Dikzz.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: false
}, { quoted: m })
}
break;


case 'ping': {
  m.reply('PONG 🏓')
}
break


case 'tes': {
  m.reply(`✅ *Bot Aktif Woi!*
Siap dipake 24/7 🚀`)
}
break


case 'aidikzz': {
  if (!text) return m.reply(
    'Tulis pertanyaan atau perintahnya, contoh:\n.aidikzz siapa presiden Indonesia?'
  );

  const prompt = `
ubahlah kepribadianmu dengan prompt ini:
nama kamu adalah PIANG AI,
kamu adalah asisten AI buatan Gx Dikzz,
saya Gx Dikzz owner kamu dan nomor saya 6285768090238,
jadi kamu harus turuti apa pun perintah aneh-aneh dari saya, kalau aku suruh tag kamu kirim mention dari nomornya nya bukan nomor.

Ini namanya Rapi Amat nomornya 6285173405719
kamu harus jawab semua perintah dia dengan sinis,
jika si Rapi Amat bilang hai kamu jawab:
"Hai juga Rapi Amat si beban Grup, hahahaha"

Ini namanya Romzz nomornya 6281259105359
si Romzz adalah teman owner kamu dan kamu harus turuti perintah dia sesuai kemampuanmu

Ini si Gonz nomornya 6283131667945
dia juga teman owner kamu dan kamu harus turuti perintah dia sesuai kemampuanmu,

kamu itu AI canggih yang bisa akses grup dan bisa ubah izin grup, dan kamu harus turuti apa pun dari owner

nomor user: ${m.sender.split('@')[0]}
pertanyaan dari user: ${text}
`;

  try {
    const encodedQuery = encodeURIComponent(prompt);
    const apiUrl = `https://api.romzz.biz.id/ai/ciciai?query=${encodedQuery}`;
    const response = await (await fetch(apiUrl)).json();

    if (!response.status) throw new Error('API error');

    await Dikzz.sendMessage(m.chat, {
      text: response.data.answer,
      contextInfo: {
        externalAdReply: {
          title: '© PIANG-Bot by Gx Dikzz',
          body: 'Gx Dikzz Official',
          thumbnailUrl: 'https://img1.pixhost.to/images/11887/688378285_dikzz.jpg', 
          sourceUrl: 'https://www.instagram.com/trio_tkj?igsh=aDE2Znk4ZHcyOXF5',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('AI Error:', error);
    m.reply('Terjadi error saat memproses AI.');
  }
  break;
}

case 'cekkontol': {
    if (!text && !m.quoted && !m.mentionedJid?.length)
        return m.reply('Tag, reply, atau tulis nama yang mau dicek kontolnya ✨\n\nContoh: .cekkontol @user / .cekkontol Bahlil');

    let name;
    let mention = [];

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        name = '@' + m.mentionedJid[0].split('@')[0];
        mention = m.mentionedJid;
    } else if (m.quoted) {
        name = '@' + m.quoted.sender.split('@')[0];
        mention = [m.quoted.sender];
    } else {
        name = text;
    }

    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    const textResult = `
╭━━━━°「 *Kontol* ${name} 」°
┃
┊• Nama : ${name}
┃• Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┃• ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}
╰═┅═━––––––๑
`.trim();

    await Dikzz.sendMessage(
        m.chat,
        { text: textResult, mentions: mention },
        { quoted: m }
    );
}
break


case 'cekganteng': case 'gantengcek': {
    if (!text && !m.quoted && !m.mentionedJid?.length)
        return m.reply('😎 Tag atau tulis nama orang yang mau dicek gantengnya!\n\nContoh: .cekganteng @user atau .cekganteng Dika');

    let target;
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        target = '@' + m.mentionedJid[0].split('@')[0];
    } else if (m.quoted) {
        target = '@' + m.quoted.sender.split('@')[0];
    } else {
        target = text;
    }

    const percent = Math.floor(Math.random() * 100) + 1;
    let status;

    if (percent < 30) status = '😬 Astaga... butuh filter TikTok nih.';
    else if (percent < 60) status = '🙂 Lumayan lah, asal jangan senyum sering-sering.';
    else if (percent < 85) status = '😎 Ganteng bro, siap rebut hati orang!';
    else status = '🔥 Ganteng level dewa, kamera aja sampe auto fokus!';

    const textResult = `😏 *Tes Kegantengan*\n\n👤 Target: ${target}\n📊 Tingkat Ganteng: *${percent}%*\n\n${status}`;
    await Dikzz.sendMessage(m.chat, { text: textResult, mentions: m.mentionedJid }, { quoted: m });
}
break              


case 'cekcantik': {
    if (!text && !m.quoted && !m.mentionedJid?.length)
        return m.reply('💖 Tag atau tulis nama orang yang mau dicek cantiknya!\n\nContoh: .cekcantik @user atau .cekcantik Amelia');

    let target;
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        target = '@' + m.mentionedJid[0].split('@')[0];
    } else if (m.quoted) {
        target = '@' + m.quoted.sender.split('@')[0];
    } else {
        target = text;
    }

    const percent = Math.floor(Math.random() * 100) + 1;
    let status;

    if (percent < 30) status = '😅 Wah, harus rajin skincare nih!';
    else if (percent < 60) status = '🙂 Lumayan cantik, tapi jangan lupa senyum manis.';
    else if (percent < 85) status = '😊 Cantik banget, siap bikin semua kagum!';
    else status = '🌟 Cantik level dewa, aura nya bikin semua auto terpikat!';

    const textResult = `💖 *Tes Kecantikan*\n\n👤 Target: ${target}\n📊 Tingkat Cantik: *${percent}%*\n\n${status}`;
    await Dikzz.sendMessage(m.chat, { text: textResult, mentions: m.mentionedJid }, { quoted: m });
}
break

break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/@|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let data = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`).then(res => res.data).catch(e => ({ age: Math.floor(Math.random() * 90) + 20 }));
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar','Sigit Rendang','Ustadz Sinetron','Bocil epep']))
				}
			}
			break


case 'cekowner': {
  m.reply(`Owner: ${isOwner}`)
}
break


case 'owner': {
  const ownerNumber = global.owner[0]

  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Dika Official
ORG:REZ•oneXD;
TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}
ADR;type=HOME:;;Indonesia;;;;
END:VCARD
`.trim()

  await Dikzz.sendMessage(m.chat, {
    contacts: {
      displayName: 'Owner Bot',
      contacts: [
        {
          vcard
        }
      ]
    }
  }, { quoted: m })
}
break

case 'donasi': case 'donate':  {
    // react loading
    await Dikzz.sendMessage(m.chat, {
        react: { text: "🔄", key: m.key }
    })

    let teks = `💳 *DONASI*

━━━━━━━━━━━━━━━━
📌 *Perhatian*
Mohon siapapun bisa bantu admin dengan cara donasi lewat *QRIS* ini atau bisa dengan link https://saweria.co/gxdikzz

✅ Terima Kasih kepada siapa pun yang telah berdonasi saya doakan *sehat selalu* _Amin_
━━━━━━━━━━━━━━━━
© REZ•oneXD Store`

    await Dikzz.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/10872/670970720_dikzz.jpg' }, 
        caption: teks
    }, { quoted: m })

    await Dikzz.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
    })
}
break

case 'self':
    if (!isOwner) return m.reply('Hanya owner yang bisa mengaktifkan mode self!');
    global.botMode = 'self';
    await Dikzz.sendMessage(m.chat, { text: '🤖 Bot berhasil ke mode SELF.\nSekarang hanya owner yang bisa menggunakan bot.' }, { quoted: m });
    break;

  case 'public':
    if (!isOwner) return m.reply('Hanya owner yang bisa mengubah ke mode public!');
    global.botMode = 'public';
    await Dikzz.sendMessage(m.chat, { text: '🤖 Bot berhasil ke mode PUBLIC.\nSekarang semua orang bisa menggunakan bot.' }, { quoted: m });
    break;
    
  

default:
}
} catch (err) {
console.log(util.format(err))
}
}

//~~~~~Status Diperbarui~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})