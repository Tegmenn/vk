const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`
**Köylü** - **jester** - **Büyücü** - **Vampir**
Gündüzleri Vampirin Kim Olduğunu Sohbette Konuşarak Tahmin Etmeye Çalışırlar. Oylayarak Vampiri Öldürürler.

**VAMPİR**
Gündüzleri Sohbette Ahaliyi Kandırarak İkna Etmeye Çalışır. Geceleri Bota Kimi Öldürmek İstediğini Yazar ve Onları Öldürür Ancak Doktorun Koruduğu Kişiyi Geceleri Öldüremezler.

**JESTER**
Oyun Boyunca İnsanları Farklı Yönlere Çekip Kendini Vampir Gibi Gösterip Öldürülmeye Çalışır. Ölünce Yanında 1 Kişiyide Öldürür.

**BÜYÜCÜ**
Büyücüler Geceleri Yöneticiye Vampirin Kim Olduğunu İsmiyle birlikte yazarlar ve Onlara Yetkili Geri Cevap Atarak Vampir Olma Oranını % şeklinde verir.
Oyun Boyunca Geceleri 2 Kere Kendini Koruma Hakları Vardır. Her Gece Birini Korumak Ve Sorgulamak Zorundadır 2 Komutu Aynı Anda Kullanamaz.


**Oyun Nasıl Oynanır?**
v!katıl yazarak oyuna dahil olurlar. Rolleri Özel Mesaj İle Bildirilir.
Gündüzleri Vampirin Kim Olduğunu Ahali Sohbette Bulmaya Çalışırlar.
Geceleri İse Vampirin Ortaya Çıkmasıyla Bir Bir Katledilirler.
Ahali, Vampiri Bulup Astıklarında İse Oyun Sona Ermiştir.

Sona Kalan 2 kişiden 1 Tanesi Vampir İse Oyunu Vampir Kazanmış DEMEKTİR.
Vampir Asıldığı Anda Oyun Biter ve Ahali Oyunu Kazanmış DEMEKTİR.

`,true)
      .setFooter(`Vampir Köylü Oyunu..`)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};