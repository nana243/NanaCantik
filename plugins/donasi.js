let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 𝐃𝐎𝐍𝐀𝐒𝐈 』──⬣
│⬡ *_Dana/Ovo_* :
│⬡ *081254496523*
╰──────────────⬣
╭───────────────⬣
│⬡ _*Owner*_ : wa.me/6281348568830
╰──────────────⬣
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
