let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • PULSA : [0812-1198-0447]
│ • OVO   : [0812-1198-0447]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
