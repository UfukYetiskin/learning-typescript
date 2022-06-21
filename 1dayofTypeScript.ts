// JavaScript Types

import { StringMappingType } from "typescript"

// String
// Number
// Boolean
// Array
// Object
// null
// undefined
// NaN
// Infinity
// function

//TypeScript ile bir değişken tanımlarkan type vermenize gerek yok. Otomatik olarak type verir.

//Type'ı otomatik olarak string olduğunu belirtir.
let myName = "Ufuk"

// --------- Type tanımlama ----------


//gfName değişkenini string type'ında tanımladık.
//gfName değişkenine string bir değer atanabilir ama başka bir type'ta değer atanamaz.
let gfName : string = 'Ümmühan'
//gfName = 23 dersek hata alırız.

//Hata almak istemiyorsak ve belli type'lar içerisinde değer almasını istyiorsak değişkenin
let gfName2 : string | number = 'Ümmühan'
//or
gfName2 = 23 

let dogru : boolean = true


//a değişkeninine type olarak any verirsek herhangi bir type desteği yokmuş sayılır ve JSteki gibi kullanılır
let a : any = 25

//Object Type
const Person : {
    isim : string,
    soyisim : string | number, //soyisim property'si string ya da number değer alabilir.
    girlfriend : "Ümmühan", //girlfriend property'sini default olarak Ümmühan ayarladık. Bu değiştirilemez.
    childs : "Deniz" | "Artemis" | "Bade",
    

} = {
    isim : "Ufuk",
    soyisim : 26,
    girlfriend : "Ümmühan",
    childs : "Deniz",
}

Person.childs = "Deniz" //Burada Ufuk object'sinin property'sini Deniz olarak değiştirdik. 3 isimden bir tanesi ile anca değiştirebiliriz.

const Ferat = {
    isim : 'Ferat',
    soyisim : 'Yetişkin',
    subling : 'Ufuk' as 'Ufuk' | 'Gurbet' | 'Meral' //Bu da aynı görevi görecektir.
}

//Array Types

//Bu dizi içerisine hangi type değerler geleceğini bilemediğimiz için any type dizidir.
const emptyarr = [] 

//Eğer dizinin içerisindeki değerlerin type'nı belirlemek istiyorsak
const stringArr : string[] = ['Ufuk', 'Gurbet', 'Ferat', 'Meral']
//or
const stringArr2 = [] as string[]

//İstenilen type'da değerler almasını istyiorsak
const alotType : (number |string | boolean)[] = []
//or
const alotType2 : number |string | boolean[] = []
//or 
const alotType3 = [] as (number |string | boolean)[]
//or
const alotType4 = [] as Array<string | number>

//static bir dizi oluşturacaksak (sonradan bir değer eklenip çıkarılmayacaksa)
const tupleArr : [string, string, number] = ['Ümmühan', 'Gümüş', 26]