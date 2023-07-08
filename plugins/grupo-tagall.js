let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@r4m1._ff* ${pesan}`
let teks = `*𝑳𝑳𝑨𝑴𝑨𝑫𝑶 𝑮𝑬𝑵𝑬𝑹𝑨𝑳, 𝑫𝑬𝑺𝑷𝑰𝑬𝑹𝑻𝑬𝑵 𝑷𝑳𝑨𝑵𝑻𝑨𝑺*\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `🐉  @${mem.id.split('@')[0]}\n`}
teks += `*🐾RamiiBot*\n\n*😼♥️*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
