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