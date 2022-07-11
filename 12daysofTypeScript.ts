// ------ Type Intersection ---------
console.log('----- Type Intersection -----')

//Type Intersection, interfacelerde birden fazla data typeının koşulunu sağlamasını istediğimiz yerlerde kullanırız.

interface BusinessPartner{
    name : string;
    credy : number;
}

interface Identity{
    name : string;
    id : number;
}

interface Contact {
    email  :string;
    phone : string
}

//Contact ve Identity interface typelarını  tutan Sirket adında bir type oluşturduk.
type Sirket = Identity & Contact

let meral : Sirket = {
    name : 'Meral',
    email : 'meral@hotmail.',
    phone : '562731231',
    id : 1231
}
console.log(meral)

//BusinessPartner ve Contact interfaceleri ile Customer adında type section oluşturduk
type Customer = BusinessPartner & Contact;

let musteri : Customer= {
    name : 'Ferat',
    email : 'ferat@hot',
    credy  : 12312,
    phone  : '123123441'
}

console.log(musteri)


// ---- Type Guard ---- 
console.log('---- Type Guard ---- ')

type tip = string | number;

function add(a : tip, b: tip){
    //return a+b ile fonksiyon içerisinde veri döndüremiyoruz bu yüzden bir koşul oluşturmamız gerkemektedir.
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }

    throw new Error('Types are different')
}

console.log(add('3', '5')) //35


class Family {
    isParent() : boolean{
        return true
    }
}

class NotFamiliy{
    isUncle() : boolean{
        return false
    }
}

type Akrabalar = Family | NotFamiliy

function isAkrabalar(partner : Akrabalar){
    let message : string;
    if(partner instanceof Family){
        message = partner.isParent() ? "Evet bunlar aile"  : "Aile değil"
    }
    if(partner instanceof NotFamiliy){
        message = partner.isUncle() ? "Evet bunlar aile"  : "Aile değil"
    }
    //return message
}