
const { MessageEmbed, Discord } = require("discord.js");
let moment = require("moment");
const conf = client.ayarlar
moment.locale("tr")
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;
    
    if (durum) {
        let mesaj = client.snipe.get(message.channel.id)
        if (!mesaj) return message.react(client.emojis.cache.find(x => x.name == "ravgar_carpi"))
        const embed = new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(mesaj.author.tag, mesaj.author.displayAvatarURL({ dynamic: true }))
            .setDescription(mesaj.content)
            .setFooter(conf.footer)
        message.channel.send({embeds: [embed]}).then
        client.snipe.delete(message.channel.id)
    } else return
}
exports.conf = {aliases: ["snipe"]}
exports.help = {name: 'Snipe'}
