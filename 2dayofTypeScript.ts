// ---- Functions Types --------

//tanımlanılan bu fonksiyonda eğer return ile bir ifade döndürülmeseydi void type olacaktı. return 25 ile type'ı number oldu
function makingSomeThing(){
    return 25;
}

//değer deişkeninin type'ı numberdır. Başka bir type atayamayız as ile
const deger = makingSomeThing();

//Type vererek fonksiyon oluşturma
function example1() : number{
    return 25;
}
//or
function example2() : number | string {
    return 'ufuk';
    //or
    //return 27
}
//or
//tuple örneği
function example3() : [number, string]{
    return [25,'Ümmühan']
}

//or
function kisi(isim : string, soyisim : string, yas : number){
    console.log({isim,soyisim,yas})
}

kisi('Ümmühan', 'Yetişkin', 23)

//or
function PromiseExample (parameters : {
    isim : string;
    soyisim : string;
    yas : number;
}) : Promise <number>{
    return new Promise((resolve, reject) =>{
        resolve(23);
    })
} 

PromiseExample({isim : 'Ufuk', soyisim: 'Yetişkin', yas : 26})

// Odev

function writeName(isim : string, tekrar: number): void {
    for(let i = 0; i< tekrar; i++){
        console.log(isim)
    }
}
writeName('Ümmühan', 10);


// ---------  Tip İsimlendirme | Type Aliasing ---------- 

type Person = {
    isim : string;
    soyisim  : string;
    yas ?: number; //? işareti ile tanımlanmamızın sebebi bunun opsiyonel olarak değer verilebilir olması. Person type'ını referans alan obje isteğe bağlı bu değerleri verir.
    gender ?: string; //? işareti ile tanımlanmamızın sebebi bunun opsiyonel olarak değer verilebilir olması. Person type'ını referans alan obje isteğe bağlı bu değerleri verir.
}

const obj : Person = {
    isim : 'Deniz',
    soyisim : 'Yetişkin', //isim ve soyisim property'leri zorunlu olduğu için tanımlandı. ama diğer özellikler opsiyonel
    gender : 'Female' ,
}

type Color  = 'Blue' | 'Red' | 'Green' //Color Type'ını kullıldığında bu 3 değerden biri kullanılabilir.
type CustomColors = 'Black' | 'Yellow' | 'White'
const myColor : Color = "Green" //burada bize 3 değerden başka değer aldıramaz.

const colorArr : Color[] = [
    'Blue', 'Green', 'Red'
]
//or
//Her iki type'ı da kullanabiliriz. Örn
const colorsArray : (Color |CustomColors)[] = ["Blue" , "Red", "Green", "Black", "Yellow", "White"]


type allColors = Color | CustomColors //bu şekilde de 2 type kullanilabilir 

const someColor : allColors[] = ['Blue', "Yellow"]

type parents = {
    isim : string,
    who : string,
    age : number
}
type child = {
    name : string,
    gender : string,
    yas : number
}

type makeFamily = child & parents

const family = {
    isim : 'Vahap',
    who : 'father',
    age : 56,
    name : 'Ufuk',
    gender : 'male',
    yas : 26

} as makeFamily

//Map()
//Map'in kullanma nedeni object türünde bir değişken oluşturulurken özelliklere key vermek istersek kullanırız.


const myMap = new Map<number, string>()
//myMap.set(key, value)
myMap.set(1, 'Yetişkin' )

//or

type PersonMap = Map<number, Person>;

const myMap2 : PersonMap = new Map()

myMap2.set(2, {
    isim: 'Vahap',
    soyisim : 'Yetişkin',
    gender : 'male'
})