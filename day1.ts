//Type Differences
//TypeScript içerisinde herhangi bir değişken tanımlandığımızda bir type belirtmezsek değişkenin değerine göre bir çıkarım yaparak bu type'ı veriyor. 

// lesson type of string
let lesson = 'TypeScript Lessons'
//yukarıdaki ile aynı sonucu verir ama burada biz elimiz ile type'ı veriyoruz.
let ders : string = 'TypeScript Lessons'

//ummuhan type of object
const ummuhan = {
    firstName : 'Ümmühan',
    lastName : 'Yetişkin'
}
//objenin özelliklerinin type'nı manuel olarak verdik.
const deniz : {firstName: string, age: number } = {
    firstName : 'Deniz',
    age  : 2
}

//interface ile özelliklerin type'ı verilebilir. Örneğin
interface Kisi {
    firstName : string;
    age : number
}
//interface yoluyla type'ları atanmış özellikleri mete değişkenine tanımladık.
const mete : Kisi = {
    firstName : 'Mete',
    age  : 1,
}

//type ile de özelliklerin type'ları tanımlanabilir. | işareti ile de  type çeşitliliği verilebilir. Örneğin
type Kisi2 = {
    firstName : string;
    age : number | string
}

const artemis : Kisi2 = {
    firstName : 'Artemis',
    age : 7
}
//Takipçi isimli bir değişken oluşturduk ve bu değişkenin type'ları sadece number ve string olabilir diye belirttik.
type Takipci  = number | string

//isim değişkeni oluşturduk ve bu değişkenin değerleri sadece bu iki değer olabilir.
type isim = 'Ufuk Yetişkin' | 'Ümmühan Yetişkin'

//yukarıda tanımladığımız Takipci değişkeni ve isim değişkenini de kullanarak bir type oluşturduk. Bu type'ı referans alarak objeler oluşturabiliriz.
interface Kisi3 {
    firstName : isim,
    age : Takipci,
}
//Kisi3 type'ını referans alarak bir obje oluşturduk.
let kisi : Kisi3 = {
    firstName : 'Ufuk Yetişkin',
    age : 26
}

//interface ile oluşturduğumuz type başka bir type'ı parametre alabilir.
interface Kanal <I, T> {
    isim: I,
    takipciSayisi : T
}

type Isim = 'Deniz' | 'Artemis'
type TakipciSayisi = number | string

let kanal : Kanal<Isim, TakipciSayisi> = {
    isim : 'Deniz',
    takipciSayisi : 12312 
}

//Kisi3 type'ını referans alarak ve bu type'ın dizi olacağını belirterek bir dizi 
//oluşturduk. Dizinin içerisinde de 2 tane obje oluşturduk. Bu objeler içerisinde 
//firstName ve age özelliği barındırmakta. firstName özelliğinde sadece 'Ufuk Yetişkin' 
//ya da 'Ümmühan Yetişkin' değerlerini kullanabilir. age özelliği içinse number ve 
//string type'ları kullanılabilir. Burada firstName'den ve isimden başka bir özellik tanımlanamaz. Çünkü Kisi3 type'ında böyle bir özellik belirtmedik.
const kisiler : Kisi3[]  =[
    {firstName: 'Ufuk Yetişkin', age : 'yirmi altı'},
    {firstName: 'Ümmühan Yetişkin', age : 23}
] 

//Function Types

type Topla = (x: number, y:number) => number;
//or but this is dirty
interface Topla2 {x:number, y:number}


const sum = (x : number, y:number) => x + y;
// or
const total = (x: number, y:number) : number => x + y;
//or
const topla : Topla = (x,y) => x+y