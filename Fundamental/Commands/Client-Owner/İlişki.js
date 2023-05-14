const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
exports.run = async function(client, message, params) {
  if (!message.guild) return
  if(!client.ayarlar.sahip.some(x => x == message.author.id)) return
  const rowcuk = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('sevgilimvar')
    .setLabel(`Sevgilim Var`)
    .setStyle('DANGER')
    .setEmoji("1042100155282886726"),
    new MessageButton()
    .setCustomId('sevgilimyok')
    .setLabel(`Sevgilim Yok`)
    .setStyle('DANGER')
    .setEmoji("1042100155282886726"),)
    message.channel.send({ components: [rowcuk], content: `__İlişki Rollerini Seçebilirsin__`})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sevgilirol'],
  permLevel: 4
};

exports.help = {
  name: 'iliskialma',
  description: "Botu yeniden başlatmaya yarar",
  usage: 'yenile',
  kategori: "Bot Yapımcısı"
};
