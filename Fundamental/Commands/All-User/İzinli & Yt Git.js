const { MessageEmbed             } = require("discord.js");
const {Discord, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js")
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;
    if (kanal) return
    
    if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == "ravgar_cancel")} Herhangi bir ses kanalına bağlı olman gerekli.`).then(e => setTimeout(() => e.delete().catch(() => { }), 15000))
    let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!kullanici) return message.reply(`${client.emojis.cache.find(x => x.name == "ravgar_cancel")} Geçerli bir üye belirt ve tekrar belirt.`).then(e => setTimeout(() => e.delete().catch(() => { }), 15000))
    if (!kullanici.voice.channel) return message.channel.send(`${client.emojis.cache.find(x => x.name == "ravgar_cancel")} Belirttiğin üye herhangi bir ses kanalına **bağlı değil**.`);
    if (message.member.voice.channel.id === kullanici.voice.channel.id) return message.channel.send(`${client.emojis.cache.find(x => x.name == "ravgar_cancel")} Belirttiğin üye ile zaten aynı ses kanalındasın.`).then(e => setTimeout(() => e.delete().catch(() => { }), 15000))

    if (message.member.permissions.has("8")) {
        message.member.voice.setChannel(kullanici.voice.channel);
    } else {
        let embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setColor("BLUE");
        let embed2 = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setColor("RED");
        let embed3 = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setColor("GREEN");
                const row = new MessageActionRow().addComponents(
                    new MessageButton().setCustomId('oonayla').setLabel(`Onayla`).setEmoji("1003436509875142686").setStyle('SECONDARY'),
                    new MessageButton().setCustomId('rreddet').setLabel(`Reddet`).setEmoji("1003436508155494470").setStyle('SECONDARY'),)
                            let msg = await message.channel.send({ components: [row], embeds: [embed.setDescription(`Hey ${message.author}, aşağıda bulunan butonlara tıklayarak odaya gelip gelmemesini belirtebilirsin.`)] });
            var filter = (button) => button.user.id === kullanici.id;
            const collector = msg.createMessageComponentCollector({ filter, time: 30000 })
            collector.on('collect', async (button, user) => {      
            if(button.customId === "oonayla") { msg.delete()
            message.member.voice.setChannel(kullanici.voice.channel.id)
            button.update({embeds: [embed3.setDescription(`${client.emojis.cache.find(x => x.name === "ravgar_tik") || "Emoji Bulunamadı"} ${kullanici} adlı kullanıcı odaya bağlanma istediğinizi onayladı.`)] }),  message.react(`${client.emojis.cache.find(x => x.name === "ravgar_tik")}`)}
            if(button.customId === "rreddet") { 
            button.update({embeds: [embed2.setDescription(`${client.emojis.cache.find(x => x.name === "ravgar_carpi") || "Emoji Bulunamadı"} ${kullanici} adlı kullanıcı odaya bağlanma istediğinizi reddetti.`)] })}   
            })
            collector.on('end', async (button, reason) => {
        
                row.components[0].setDisabled(true) 
                row.components[1].setDisabled(true) 
                msg.edit({ components: [row] }); 
        })
        
       };
}
exports.conf = {aliases: ["go", "Git", "Go"]}
exports.help = {name: 'git'}
