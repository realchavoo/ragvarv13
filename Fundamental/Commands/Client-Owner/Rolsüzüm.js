const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
exports.run = async function(client, message, params) {
  if (!message.guild) return
  if(!client.ayarlar.sahip.some(x => x == message.author.id)) return
  const rowcuk = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('rolsüzüm')
    .setLabel(`TIKLA!`)
    .setStyle('DANGER')
    .setEmoji("1033652081489367100"),)
    message.channel.send({ components: [rowcuk], content: `${client.emojis.cache.find(x => x.name === "ravgar_bit")} Selamlar **${message.guild.name}** Üyesi\nEğerki Üzerine \` Unregister \` Permi Verilmediyse Bu Butona Tıklamalısın!`})
};
1033652081489367100


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolsüzüm'],
  permLevel: 4
};

exports.help = {
  name: 'rolsüzümknk',
  description: "Botu yeniden başlatmaya yarar",
  usage: 'yenile',
  kategori: "Bot Yapımcısı"
};
