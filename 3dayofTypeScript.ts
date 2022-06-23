//-------- Modules ---------

/* 
ES Modules (Ecmascript modülleri) JavaScript için bir import 
mekanizması sağlar. Bu mekanizma sayesinde farklı dosyalar 
içerisinde yer alan kodlar, diğer dosyalarda import ederek tekrar 
kullanılabilir hale gelmektedir.

ES modüllerinin ana hedefi tarayıcılar olsa da 2020’de NodeJS 
desteği ile sunucularda da kullanılabilir hale gelmiştir.

Her dosya bir tane export default çıkartabilir.

çıkartılan fonksiyonu şu şekilde import edebiliriz: 

    import Person from './Person'

şeklinde alabiliriz.

burada türetilmiş object type'ını export ile gönderdikten sonra şu şekilde alabiliriz.

import Person, {Student} from './Person'

*/



export default class Person {
    //Static ile bu veriyi almak isteyen dosyada kullanılabilir hale geliyor.
    static isim = 'Gurbet'
}

export type Student = {
    isim : string,
    no : number,
    campus : string
}


// ----- Object Types ----

type objType = {
    isim : string;
    age : number;
    location : string;
}

const obj : objType = {
    isim : 'Ümmühan',
    age : 23,
    location : 'Aydın'
}

//Eğer bir type üretirken özelliklerin opsiyonel olmasını istiyorsak, bütün özelliklere soru işareti koymak yerine
//optionalObj type'nı referans olarak kullanan objler için bu özellikler zorunluluk değiş opsiyonel olarak tanımlanmış olacaktır.
type optionalObj = Partial<{
    isim : string;
    yas : string;
}>;


//Object type oluşturulurken referans alacak object'de zorunlu özellikler dışında isteğe bağlı özellik eklemek istersek
type optionalProperty = {
    isim  : string,
    age : number,
    location : string,
    [key: string] : any; //referans alan obje 3 özellik dışında istediği type' göre bir özellik ekleyebilir.
}

//Record type'ı ile object içerisindeki key'şn ve value'nun typelerini belirleriz.
//Bu objede key'in string değer, value'nun da number değer olması isteniyor
const recordObj : Record <string, number> = {
    sira : 12,
    yas : 26,
} 