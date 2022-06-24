// ---- Interfaces --------- 

/*TypeScript’deki interface, temelinde bir tip tanımından başka birşey değildir. class 
ve function‘lar nesnelerin davranışlarını tanımlarken, interface‘ler nesnelerin 
tiplerini tanımlar şeklinde düşünebiliriz. 

interface'in bir özelliği de import edildiği yerde genişletilebilir hale geliyor. Yani
istediğimiz özelliği ekleyebilir hale geliyoruz. Bu type ile tanımlanmış sınıflarda veya diğer
türlerde sağlanamıyor.

*/

interface Kisi  {
    isim : string,
    surname : string,
    age : number,
    isMarried: boolean,
    [key : string] : any,
}

const ufuk : Kisi = {
    isim : 'Ufuk',
    surname : 'Yetişkin',
    age: 26,
    isMarried : false
}

//Kisi interface'i içerisinde tanımlanmış isim özelliğini kullandık
const isim : Kisi['isim'] = 'Ümmühan'


//Dizi oluşturma
interface myArray {
    [index : number] : string | number
}

const array = ['deniz', 18]

//fonksiyon type belirleme
interface IFunction {
    (isim : string, tekrar : number) : void;
    //döndürelecek parametre değeri birden fazla yazılabilir
    // gibi(isim : string, tekrar : number) : number;
}

const myFunction : IFunction = (isim, tekrar) => {
    
}


//extends ile interface ile oluşturulmuş tipi referans alabilirz

interface MongoRespnse {
    _id : string,
    createdAd : string,
    updatedAt : string
}

interface BookResponse extends MongoRespnse {
    name : string,
    date : Date
}

function getBooks() : BookResponse {
    return {
        _id : 'asdas',
        createdAd : '',
        updatedAt : '',
        date : new Date(),
        name : 'insan ne ile yaşar'
    }
} 

// ---- Classes ----- 
