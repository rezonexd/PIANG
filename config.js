/*
Base Whatsapp Bot
By Gx Dikzz

 Sript bot WhatsApp ini adalah 100% buatan Gx Dikzz (YT: XDicaBot). 
 Script ini free tidak diperjual belikan.
 Bebas Rename, Jangan Hapus WM (dasar bocil rename)
 Jangaan lupa subscribe XDicaBot


YouTube : @xdicabot
GitHub  : rezonexd
*/

//━━━━━━━━━━━ SETTING GLOBAL ━━━━━━━━━━━//

global.owner = ["6285768090238"]
global.ownerName = "Gx Dikzz"


global.bot = '6283131667945'
global.namabot = 'PIANG AI'
global.namaown = 'Gx Dikzz'

global.packname = 'PIANG Bot'
global.author = 'By Gx Dikzz'

global.footer = '© Gx Dikzz'
global.wm = 'Gx Dikzz Developer Bot'

global.version = '1.0.0'
global.sessionName = 'session'

global.prefix = ['.', '!', '#']

const fs = require('fs')

global.thumbnail = fs.readFileSync('./media/thumb.png')
global.saluran = 'https://whatsapp.com/channel/0029VbAJsjo9sBIIQT4fQx30'
global.adReply = {
  title: global.namabot,
  body: global.wm,
  thumbnail: global.thumbnail,
  sourceUrl: global.saluran,
  mediaType: 1,
  renderLargerThumbnail: true,
  showAdAttribution: true
}

async function sendBotMessage(sock, jid, text, quoted) {
  return sock.sendMessage(jid, {
    text,
    contextInfo: global.adReply
  }, { quoted })
}

//━━━━━━━━━━━ SETTING RESPONSE ━━━━━━━━━━━//

global.mess = {
  success: '✅ Berhasil!',
  admin: '❌ Fitur ini khusus admin!',
  botAdmin: '❌ Bot harus jadi admin!',
  owner: '❌ Khusus owner!',
  group: '❌ Fitur ini hanya di grup!',
  private: '❌ Fitur ini hanya di chat pribadi!',
  wait: '⏳ Tunggu sebentar...',
  error: '❌ Terjadi kesalahan!'
}


