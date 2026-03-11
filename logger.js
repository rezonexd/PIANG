// Logger Pesan WhatsApp
// WM : Gx Dikzz

// Sript bot WhatsApp ini adalah 100% buatan Gx Dikzz (YT: XDicaBot). 
 //Script ini free tidak diperjual belikan.
// Bebas Rename, Jangan Hapus WM (dasar bocil rename)
// Jangaan lupa subscribe XDicaBot

// SEPERTINYA DISINI GAK ADA YANG PERLU DI UBAH, SOLANYA CUMA LOG TERMINAL DOANG JIR, PERGI DARI SINI UBAH CASE / FITUR AJA SONO

// JANGAN HAPUS WM, HARGAILAH CREATOR

module.exports = async (m) => {
try {
    const waktu = new Date();
    const isGroup = m.key.remoteJid.endsWith('@g.us');
    const jam = waktu.toLocaleTimeString('id-ID');
    const hari = waktu.toLocaleDateString('id-ID', { weekday: 'long' });

    const pushname = m.pushName || 'Unknown';
    const senderNumber = m.key.participant
        ? m.key.participant.split('@')[0]
        : m.key.remoteJid.split('@')[0];

    let body = '-';
    if (m.message) {
        const type = Object.keys(m.message)[0];
        body =
            type === 'conversation' ? m.message.conversation :
            type === 'imageMessage' ? m.message.imageMessage.caption :
            type === 'videoMessage' ? m.message.videoMessage.caption :
            type === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
            '-';
    }

    console.log(`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 📥 MESSAGE LOG
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 👤 Nama   : ${pushname}
┃ 📞 Nomor  : ${senderNumber}
┃ 💬 Pesan  : ${body}
┃ 🗂️ Tipe   : ${isGroup ? 'Grup' : 'Pribadi'}
┃ 🆔 ChatID : ${m.key.remoteJid}
┃ ⏰ Waktu  : ${hari}, ${jam}
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ⚡ WM : Gx Dikzz
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
} catch (err) {
    console.error('[LOGGER ERROR]', err);
}
}