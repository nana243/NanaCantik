let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Nana Saputri
│ ✎ _Pendidikan_ : Kerja
│ ✎ _Umur_ : 21
│ ✎ _Asal_ : -
│ ✎ _Status_ : Single
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
│ ✎ _WhatsApp_ :
│    wa.me/6281348568830
╰──────────────────
`.trim(), m)
}

handler.help = ['infonana']
handler.tags = ['main', 'utama']
handler.command = /^(infonana)$/i

handler.exp = 150

module.exports = handler
