const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config'); // +
let wk = Config.WORKTYPE == 'private' ? true : false // +
const pd = "Arkadaşlarınıza güzel bio'lar seçer." // +

Asena.addCommand({pattern: 'bio$', fromMe: wk, desc: pd}, (async (message, match) => {

    const id = message.jid // +
    if (!message.reply_message) return await message.client.sendMessage(id, '```Bio seçmem için birini yanıtlaman gerekiyor!```', MessageType.text); // +
    await message.client.sendMessage(id, '@' + message.reply_message.jid.split('@')[0] + ' ```Adlı Kullanıcı için bio seçiyorum..``` ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]} 
    });
    await new Promise(r => setTimeout(r, 1700)); // +
    var r_text = new Array ();
r_text[0] = "*Mesafe Dediğin Nedir ki Biz Allah'i Görmeden Sevmedik Mi 🕊* ";
r_text[1] = "*Başka Bedenlerde Terleyip Peşime Düşme Üşürsün. 🌌* ";
r_text[2] = "*Ezan ile çağırana gitmezsen, dua ile çağırdığın sana gelir mi hiç✨* ";
r_text[3] = "*Allah'ım Ya Kavuşdur Yada Unutdur...🥀⛓* ";
r_text[4] = "*Hayran'ım Hem Haddini Hem Rabbini Bilene...* ";
r_text[5] = "*Şu Dünyada Payıma Düşen En Güzel Şeysin..❤* ";
r_text[6] = "*Biz Sevmekle Yükümlüyüz Kavuşmak mı? Onu Allah Bilir..🌿* ";
r_text[7] = "*Pişman değilim, o gülüşü görsem yine yenik düşerim🍂🌒* ";
r_text[8] = "*Ruhları Sevin Bedenler Çüreyecek...🍂🍂* ";
r_text[9] = "*İnancımız Şudur: Dünya Yük Allah Büyük...✨* ";
r_text[10] = "*Ben sekiz milyar insan içinde seni buldum sen ise 78 organımın içinde kalbimi bulamadınya o çok koyuyor be..🙂* ";
r_text[11] = "*kimseye hatır borcum yok ben zaten kahve sevmem..! 🖤* ";
r_text[12] = "*Hep O Yapmaz Dediklerimiz Yüzünden Asla Yapmayacak Olanlara Da Güvenme* ";
r_text[13] = "*Allah bizi sevmeyenlerden değil, seviyomuş gibi yapanlardan korusun. 🐆* ";
r_text[14] = "*Hayalleri sana, seni duaya, duayı da Allah'a emanet ettim. 🔐❤️* ";
r_text[15] = "*...αrαmízdα nє σlurѕα σlѕun. ѕєní tαnımıѕ̧ σlmαnın gєtírdíğí вαhαrı unutmαm...* ";
r_text[16] = "*Uyusak rüyalar kandırıyor uyansak insanlar🕊* ";
r_text[17] = "*Kimseye güvenmiyorum güzel yazıyorlar güzel konuşuyorlar dil başka yürek başka* ";
r_text[18] = "*Uçmayı Öğrenmeden Göçmeye Mecbur Kalmış Bir Kuş Gibi Kalbimiz.🖤🔗* ";
r_text[19] = "*Zaman herşeyin ilacı değil, bunu bir mezara çiçek diktiğinde anlıyorsun...🥀* ";
r_text[20] = "*Güzel şeyler zaman alır dedik zaman güzel şeyleri aldı* ";
r_text[21] = "*Hayatta sahip olamayacağın şeye ikinci kez bakma şimdi profilden çıkabilirsin :)* " ;
r_text[22] = "*Herkese Aynı Değilim Beni Kimden Dinledin...🥀* " ;
r_text[23] = "*Karanliktaysan gölgen bile seni yanlız bırakır.🖤🌙* " ;
r_text[24] = "*İyi Olan Herşey unutulur Sen beni Kötü Hatırla...🚬🥀* " ;
r_text[25] = "*Güzeli güzel yapan edeptir edep ise güzeli sevmeye sebeptir🌼* " ;
r_text[26] = "*Bir kurşun kalbimde senden daha onurlu durur.* " ;
r_text[27] = "*Ne Diyordu Şair Her Gecenin Yıldızına Dilek Tutulmaz...🕊* ";
r_text[28] = "*Ve sonra dediki kuru yaprak dala unutma yeşil günlerimizi 🍀* ";
r_text[29] = "*Canımı Allah’ın alacağını biliyordum fakat kulunun nefesimi keseceği bilmiyordum* ";
r_text[30] = "*Gecenin Karanlığını Aydınlatacak Kadar Parlak Hayatımız Olmadı..😏🍷🥂* ";
r_text[31] = "*Farklı olmak için degil, Mutlu olmak için yaşıyorum...🌹🙂* ";
r_text[32] = "*dönüşün umrumda bile değil benim derdim gidişindi...😒* ";
r_text[33] = "*♤...♡...♤ her saniyemiz ölüme giderken kolumuzdaki saatin fiyat'ının ne farkı var ♤...♡...♤* ";
r_text[34] = "*unutma ki! senin küle çevirdiğin kalbe bir başkası üfleyerek can verdi 🥀🕊️🍂* ";
r_text[35] = "*Güçlüyüm... Çünkü başka seçeneğim yok düşersem tutanım olmayacak biliyorum...🚬* ";
r_text[36] = "*Geçici insanlar kalıcı dersler verir🥀* ";
r_text[37] = "*Bu hayatta seni uzeni çıkartacasinki seni sevene yer açılsın 🔥🤍* ";
r_text[38] = "*Her sey görüldüğü gibi olsaydı eline aldığın deniz suyu mavi olurdu, kimse anlamadı susmayı tercih ettim...* ";
r_text[39] = "*İnsanları memnun etmek ulaşılmaz bir hedeftir, Allahı razı etmek ise terk edilmemesi gereken bir hedeftir. * ";
r_text[40] = "*Hayaller de güzeldi, yaşanabilseydi...* ";
r_text[41] = "*Dünya Hassas Kalpler İçin, Sadece Bir Cehennemdir🥀* ";
r_text[42] = "*Tüm şehri verseler umursamam da, o sokaktan geçerken duraksarim* ";
r_text[43] = "*Belki şair olamayacağım ama yaşadığım en güzel şiir sen olacaksın 🍁🌹* ";
r_text[44] = "*Soğuk kalpten güzel söz çıkmaz, beklemeyin incinirsiniz...🥀* ";
r_text[45] = "*UMARIM TERCİH ETTİKLERİN VAZGEÇTİKLERİNE DEĞER..!* ";
r_text[46] = "*Güzel çiçek açardıkda yanlış toprağa gömüldük* ";
r_text[47] = "*Affetdiklerimi ben yapsaydım, affetmezlerdi 🙂* ";
r_text[48] = "*Çay içmek bile yoktu nasibimizde, Biz kalktık sevdalandık...🍂* ";
r_text[49] = "*Bırak giden gitsin, silen silsin. atacak kemiğin varsa, gelecek köpeğin çok olur..! 😉* ";
r_text[50] = "*Güzel seven bütün insanlar yine yanlış kalplere kanacaklar...💔😒☄️* ";
r_text[51] = "*Bir Duvara Bile Yankılanan Ses, İnsanın Yüreğine Değmiyor Bazen. 🍂🖤* ";
r_text[52] = "*Senin bakışın! benim mirasım🗝️* ";
r_text[53] = "*Sana bir kez baktım.Gözlerim başka bahçe görmez oldu..🍁🍂* ";
r_text[54] = "*Her Kese Bir Sinirim Vardı Ama Seni Görünce Gülerdim❤☘* ";
r_text[55] = "*Kaç dua sonra gelirsin bilmem ama ben ellerimi gökyüzüne feda ettim ♥️...* ";
r_text[56] = "*Gönlümün Muradı Olsun Yastığım Taştan Olsun..🕊🔐* ";
r_text[57] = "*Benim hayelerim kelebeğin ömrü kadar yaşar 💔🥀* ";
r_text[58] = "*İnsanı yaşı değil, yaşadıkları büyütür🖇️🍃* ";
r_text[59] = "*İNSANLARI TANIDIKÇA YALNIZLIĞI SEVDİM...🙂🌹* ";
r_text[60] = "*SUSKUNLUĞUM NAMLUDAN ÇIKAN İLK MERMİ KADAR ACIMASIZ OLACAK*";
r_text[61] = "*Acı Mühim Değilde Umut Yoruyor İnsanı....😒💔* ";
var i = Math.floor(62*Math.random())

await message.client.sendMessage(id,`${r_text[i]}`,MessageType.text, { quoted: message.data }); // +

}));