console.log('TypeScript"e girdik');
console.log('asdalskdjas');
//TypeScript, tipi belirli bir dildir.
//Type tanımlama
//Data Type / Number, String, Boolean
//----- Number Type
var age = 26;
//------- String Type
var firstName = 'Ufuk';
var lastName = 'Yetişkin';
//ES6'dan önce string type birleştirme/toplama
var fullName = firstName + ' ' + lastName;
console.log(fullName);
//Es6'dan sonra string type birleştrime/toplama
var fullName2 = "".concat(firstName, " of lastname ").concat(lastName);
console.log(fullName2);
//---------- Boolean Type 
var isMarried = false;
var hasGirlFriend = true;
// ------- Array Type
//None Types of Array
var fullFAmily = ['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ufuk'];
//First Way
var sublings = ['Ufuk', 'Gurbet', 'Ferat', 'Meral'];
//Second Way
var parents = ['Vahap', 'Filiz'];
//Third Way
var fruits;
fruits = ['Apple', 'Orange', 'Banana'];
//First way MultiTypes
var sebzeler = ['Patlican', 15, 'Kabak', 10];
//Second way MultiTypes
var meyveler = ['Şeftali', 15, true];
//----- Tuple, tanımlanan type'e uygun karşılık değerin de o type'e sahip olması gerekmektedir.
var ummuhan = [23, 'Ümmühan', 1998, 'Muğla', true];
//Array Tuple, number ve string typelarına sahip dizi içerisinde farklı dizi elemanları
var childs = [[18, 'Deniz'], [16, 'Artemis']];
//Data Type- Object
var courses;
courses = {
    firstCourse: 'Patika.dev',
    secondCourse: 'Kodluyoruz',
    thirdCourse: 'SoloLearn',
    date: 2022
};
console.log(courses);
var webDev = {
    firstCourse: 'freecodecamp',
    secondCourse: 'HackerRank',
    thirdCourse: 'CoderSpace',
    date: 2022
};
console.log(webDev);
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
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media); //{0: 'Newspaper', 1: 'Newsletter', 2: 'Magazine', 3: 'Book', Newspaper: 0, Newsletter: 1, Magazine: 2, Book: 3}
console.log(Media.Magazine); //2
console.log(Media[2]); //Magazine
//Enum string değer
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "Newspaper";
    PrintMedia["Newsletter"] = "NewsLetter";
    PrintMedia["Magazine"] = "Magazine";
    PrintMedia["Book"] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia); //{Newspaper: 'Newspaper', Newsletter: 'NewsLetter', Magazine: 'Magazine', Book: 'Book'}
console.log(PrintMedia.Magazine); //Magazine
console.log(PrintMedia['Newspaper']); //Newspaper
//Data Type - Union, bir type string veya number olabilir demek istiyorsak kullanırız.
//code adlı değişkene belirtilen typelardan bir tanesi tanımlanabilir.
var code = '123';
console.log(typeof code); //string
//Data Type - Any, önerilmez. Type'ı bilmiyorsak ya da verilen değer bilinmiyorsa kullanılır
var someThing = 123;
//or
var hello = 'Hello';
//or
var isTrue = true;
//or
var exObj = {
    sevgili: 'Ümmühan'
};
//or
var exArr = ['Ümmühan', 'Gümüş', 23];
//Data Type - Void,  bir fonksiyonda geriye değer döndürmüyorsak kullanılır. 
function sayHello() {
    console.log('Hello');
}
sayHello();
//Data Type - Never, Eğer herhangi bir değer dönmeyecek veya hataya düşme olasılıkları olan geri dönüşler için kullanılır.
//Void tanımsız (undefined) veya boş (null) bir değerde olabilir. Never benzer herhangi bir değer alamaz.
// function throwError(errorMsg: string) : never {
//     throw new Error(errorMsg)
// }
// throwError('Hata')
//Type Inference; degisken, sabit deger, parametre, fonksiyon donus degeri gibi bir dil ogesinin tipini kod icindeki tanımlanılan değerden cikarma teknigidir.
var sayac = 0; //herhangi bir type belirtmememize rağmen type' number olarak varsayılır
console.log(typeof sayac); //number
function increment(counter) {
    return counter = counter + 1;
}
increment(2);
console.log(typeof increment); //function
//Type Assertion, type inference'ın yaptığını yapmasını istemiyorsak ve değişkene bir type vermek istiyorsak kullanırız.
var ecma = 123;
var empEcma = ecma;
console.log(typeof (empEcma)); //number
var employee = {};
employee.name = 'Deniz';
//Type Casting, 
//değiştirilecek type unkown olarak belirtilmelidir.
var clueless = "1";
var clueNum = clueless;
console.log(clueNum); //1
//or
var clueNumPreferred = clueless;
