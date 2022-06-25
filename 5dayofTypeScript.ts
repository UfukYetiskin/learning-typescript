// ---- Yardımcı Tipler |  Utility Types --------

interface Kisi {
    isim : string;
    soyad  : string;
    yas : number;
}


//Omit yadımcı type'ı ile referans alınan object type'ından sadece istenilen özelliklerin alınmasını sağlarız.
const Ummuhan : Omit <Kisi, 'yas'> = { //yas property'sinin alınmamasını istedik
    isim : 'ümmühan',
    soyad : 'yetişkin'
}


function yazdir(location : {
    memleket : string,
    plaka : number,
}) {}

// yazdir fonksiyonunun sadece 0 indexine sahip parametresini alır
type funcType = Parameters<typeof yazdir>['0']

const prototypetoyazdir : funcType ={
    memleket : "Diyarbakır",
    plaka : 21,
}

//partial ile Kisi type'ı içerisindeki özellikler opsiyonel olur.
const deniz : Partial<Kisi> = {
    location : 'Roma'
}
interface Childs {
    isim : string;
    soyad  : string;
    yas : number;
}

// Required ile özellikler artık opsiyonel değil zorunlu olur
const mete : Required<Childs> = {
    isim: 'Mete',
    soyad : 'Yetişkin',
    yas : 16,
}

//Readonly ile özelliklere herhangi bir atama yapılamaz hale gelir.
const artemis: Readonly <Childs>  = {
    isim: 'Artemis',
    soyad : 'Yetişkin',
    yas : 18,
}
//artemis.isim = "Artemis Helen" hata alırız bu şekilde atama yapılamayacağı için


//Pick ile belirli sadece istenilen özellik (tip) kullanılabilir
const uzay : Pick <Kisi, 'yas' | 'isim'> = { //yas tipi kullanılamaz oldu
    isim : 'Uzay',
    yas : 12
}

// Exclude, istenilen typeları yok saymayı sağlar
type ExcludeFather = Exclude<string |number | boolean ,boolean>
const father  : ExcludeFather = 55;