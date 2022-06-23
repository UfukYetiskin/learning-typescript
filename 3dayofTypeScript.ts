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