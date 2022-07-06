console.log('TypeScript"e girdik');
console.log('asdalskdjas')

//TypeScript, tipi belirli bir dildir.


//Type tanımlama

//Data Type / Number, String, Boolean

//----- Number Type
let age : number = 26;

//------- String Type
let firstName : string = 'Ufuk'
let lastName : string = 'Yetişkin'

//ES6'dan önce string type birleştirme/toplama
const fullName : string = firstName + ' ' + lastName  

console.log(fullName)


//Es6'dan sonra string type birleştrime/toplama
const fullName2 : string = `${firstName} of lastname ${lastName}`
console.log(fullName2)


//---------- Boolean Type 
let isMarried : boolean = false;
let hasGirlFriend : boolean = true;




// ------- Array Type

//None Types of Array
let fullFAmily = ['Vahap', 'Filiz' , 'Meral', 'Ferat', 'Gurbet', 'Ufuk']

//First Way
let sublings : string[] = ['Ufuk', 'Gurbet', 'Ferat', 'Meral']

//Second Way
let parents : Array<string> = ['Vahap', 'Filiz']

//Third Way
let fruits  : Array<string>;
fruits = ['Apple', 'Orange', 'Banana']

//First way MultiTypes
let sebzeler : (string | number )[] = ['Patlican', 15, 'Kabak', 10]

//Second way MultiTypes
let meyveler : Array<string | number |boolean> = ['Şeftali', 15, true]

//----- Tuple, tanımlanan type'e uygun karşılık değerin de o type'e sahip olması gerekmektedir.
let ummuhan : [number, string, number, string, boolean] = [23, 'Ümmühan', 1998, 'Muğla', true]

//Array Tuple, number ve string typelarına sahip dizi içerisinde farklı dizi elemanları
let childs : [number, string][] = [[18, 'Deniz'], [16, 'Artemis']]


//Data Type- Object

let courses : object ;
courses = {

    firstCourse : 'Patika.dev',
    secondCourse : 'Kodluyoruz',
    thirdCourse : 'SoloLearn',
    date : 2022,

}
console.log(courses)


type Courses = {
    firstCourse : string,
    secondCourse : string,
    thirdCourse : string,
    date : number,
};

let webDev : Courses = {
    firstCourse : 'freecodecamp',
    secondCourse : 'HackerRank',
    thirdCourse  : 'CoderSpace',
    date : 2022,
}

console.log(webDev)

//or 
/*let webDev = {
    firstCourse : string,
    secondCourse : string,
    thirdCourse : string,
    date : number,
} = {
    firstCourse : 'freecodecamp',
    secondCourse : 'HackerRank',
    thirdCourse  : 'CoderSpace',
    date : 2022,
}
*/

//Data Type / Enum
//Enum'da özellikler 0'dan başlar ve 1 er 1 er artar. Başlangıç değerini manuel olarak değiştirebiliriz.
enum Media{
    Newspaper,
    Newsletter,
    Magazine,
    Book
}
console.log(Media)//{0: 'Newspaper', 1: 'Newsletter', 2: 'Magazine', 3: 'Book', Newspaper: 0, Newsletter: 1, Magazine: 2, Book: 3}
console.log(Media.Magazine) //2
console.log(Media[2])//Magazine


//Enum string değer
enum PrintMedia {
    Newspaper =  'Newspaper',
    Newsletter = 'NewsLetter',
    Magazine = 'Magazine',
    Book = 'Book'
}
console.log(PrintMedia) //{Newspaper: 'Newspaper', Newsletter: 'NewsLetter', Magazine: 'Magazine', Book: 'Book'}
console.log(PrintMedia.Magazine)//Magazine
console.log(PrintMedia['Newspaper'])//Newspaper


//Data Type - Union, bir type string veya number olabilir demek istiyorsak kullanırız.
//code adlı değişkene belirtilen typelardan bir tanesi tanımlanabilir.
let code : string | number | boolean = '123'
console.log(typeof code) //string


//Data Type - Any, önerilmez. Type'ı bilmiyorsak ya da verilen değer bilinmiyorsa kullanılır
let someThing : any = 123;
//or
let hello  : any = 'Hello'
//or
let isTrue : any = true
//or
let exObj : any = {
    sevgili : 'Ümmühan'
}
//or
let exArr : any = ['Ümmühan', 'Gümüş', 23]


//Data Type - Void,  bir fonksiyonda geriye değer döndürmüyorsak kullanılır. 
function sayHello() : void {
    console.log('Hello')
}
sayHello()


//Data Type - Never, Eğer herhangi bir değer dönmeyecek veya hataya düşme olasılıkları olan geri dönüşler için kullanılır.
//Void tanımsız (undefined) veya boş (null) bir değerde olabilir. Never benzer herhangi bir değer alamaz.
// function throwError(errorMsg: string) : never {
//     throw new Error(errorMsg)
// }
// throwError('Hata')


//Type Inference; degisken, sabit deger, parametre, fonksiyon donus degeri gibi bir dil ogesinin tipini kod icindeki tanımlanılan değerden cikarma teknigidir.
let sayac  = 0; //herhangi bir type belirtmememize rağmen type' number olarak varsayılır
console.log(typeof sayac) //number

function increment(counter:number){
    return counter = counter + 1
}
increment(2)
console.log(typeof increment) //function



//Type Assertion, type inference'ın yaptığını yapmasını istemiyorsak ve değişkene bir type vermek istiyorsak kullanırız.
let ecma : any = 123;

let empEcma = <number>ecma
console.log(typeof (empEcma))//number

interface Employee{
    name : string,
    code : number
}

let employee = <Employee>{}
employee.name='Deniz'

//Type Casting, 
//değiştirilecek type unkown olarak belirtilmelidir.
const clueless : unknown  = "1"

const clueNum : number = <number>clueless
console.log(clueNum) //1

//or
const clueNumPreferred = clueless as number;