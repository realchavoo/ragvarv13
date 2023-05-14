const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
exports.run = async function(client, message, params) {
  
  if(!client.ayarlar.sahip.some(x => x == message.author.id)) return
  const rowcuk = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('etkinnlikKatilimcisi')
    .setLabel(`Etkinlik Katılımcısı`)
    .setStyle('SECONDARY')
    .setEmoji("904403680449667122"),
    new MessageButton()
    .setCustomId('cekilisKatilimcisi')
    .setLabel(`Çekiliş Katılımcısı`)
    .setStyle('SECONDARY')
    .setEmoji("740684333370703923"),)
    message.channel.send({ components: [rowcuk], content: `${client.emojis.cache.find(x => x.name === "ravgar_bit")} Merhaba **${message.guild.name}** Üyeleri\n\n${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` @ÇekilişKatılımcısı \` Rolü Alarak **Nitro** **Spotify** **Netflix** vb. Çekilişlerimizde Haberdar Olabilirsiniz.\n\n${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` @EtkinlikKatılımcısı \` Rolü Alarak **Gartic İo** **Vk** **Dc** **Vampir Köylü** vb. Etkinliklerden Haberdar Olabilirsiniz.\n\n${client.emojis.cache.find(x => x.name === "ravgar_info")} **NOT:** \`Kayıtlı,Kayıtsız Hepiniz Bu Kanalı Görebilmektesiniz Everyone,Here Atılmayacağından Rollerinizi Almayı Unutmayınız.\``})
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ec-rol-alma', 'ecrolal',"takachi"],
  permLevel: 4
};

exports.help = {
  name: 'etkinlikcekilis',
  description: "Botu yeniden başlatmaya yarar",
  usage: 'yenile',
  kategori: "Bot Yapımcısı"
};
