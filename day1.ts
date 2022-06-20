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

//type ile de özelliklerin type'ları tanımlanabilir. Örneğin
type Kisi2 = {
    firstName : string;
    age : number
}

const artemis : Kisi2 = {
    firstName : 'Artemis',
    age : 7
}



//Function Types

type Topla = (x: number, y:number) => number;

const sum = (x : number, y:number) => x + y;
// or
const total = (x: number, y:number) : number => x + y;
//or
const topla : Topla = (x,y) => x+y