//Type Differences
//TypeScript içerisinde herhangi bir değişken tanımlandığımızda bir type belirtmezsek değişkenin değerine göre bir çıkarım yaparak bu type'ı veriyor. 
// lesson type of string
var lesson = 'TypeScript Lessons';
//yukarıdaki ile aynı sonucu verir ama burada biz elimiz ile type'ı veriyoruz.
var ders = 'TypeScript Lessons';
//ummuhan type of object
var ummuhan = {
    firstName: 'Ümmühan',
    lastName: 'Yetişkin'
};
//objenin özelliklerinin type'nı manuel olarak verdik.
var deniz = {
    firstName: 'Deniz',
    age: 2
};
//interface yoluyla type'ları atanmış özellikleri mete değişkenine tanımladık.
var mete = {
    firstName: 'Mete',
    age: 1
};
var artemis = {
    firstName: 'Artemis',
    age: 7
};
//Kisi3 type'ını referans alarak bir obje oluşturduk.
var kisi = {
    firstName: 'Ufuk Yetişkin',
    age: 26
};
var kanal = {
    isim: 'Deniz',
    takipciSayisi: 12312
};
//Kisi3 type'ını referans alarak ve bu type'ın dizi olacağını belirterek bir dizi 
//oluşturduk. Dizinin içerisinde de 2 tane obje oluşturduk. Bu objeler içerisinde 
//firstName ve age özelliği barındırmakta. firstName özelliğinde sadece 'Ufuk Yetişkin' 
//ya da 'Ümmühan Yetişkin' değerlerini kullanabilir. age özelliği içinse number ve 
//string type'ları kullanılabilir. Burada firstName'den ve isimden başka bir özellik tanımlanamaz. Çünkü Kisi3 type'ında böyle bir özellik belirtmedik.
var kisiler = [
    { firstName: 'Ufuk Yetişkin', age: 'yirmi altı' },
    { firstName: 'Ümmühan Yetişkin', age: 23 }
];
var sum = function (x, y) { return x + y; };
// or
var total = function (x, y) { return x + y; };
//or
var topla = function (x, y) { return x + y; };
