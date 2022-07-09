// -------- Class ----------- 
console.log('Classes')

class Kisi{
    public id: number; //default public
    //readonly firstName : string; buradaki değer değiştirilemez
    firstName : string;
    lastName : string;
    constructor(id: number, firstName: string, lastName: string){
         this.id = id;
         this.firstName = firstName;
         this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName
    }

}

let kisiBilgisi = new Kisi(16219049, 'Ufuk' , 'yetişkin')
console.log(kisiBilgisi)
console.log(kisiBilgisi.getFullName())

// ---- Acces Modifiers (Public | Private | Protected)
//Kisi class'ının özellikleri (id, firstName, lastName) varsayılan (default) olarak publictir. Publick olması sayesinde istediğimiz yerden o özelliği çekebiliyoruz.

//Private, tanımlanılan değişken ya da özellik sadece tanımlandığı scope içerisinde kullanılabilir.

//Protected ile class içerisinde tanımlanmış özellikler sadece class içerisinde ve classı extends alan classlar içerisinde kullanılabilir.


//----- Readonly
//Class içerisindeki değere dışarıdan erişebiliyoruz fakat bu değeri dışarıdan değiştiremiyoruz.


//---- Inheritance

//Employee class'ı child classtır. Kisi class'ından değerleri (id, firstName, lastName) initialize ediyoruz.
class Employee extends Kisi{
    constructor(id: number, firstName: string, lastName :string) {
        super(id, firstName, lastName)
    }
}

let emp = new Employee(1239123, "Ümmühan", "Yetişkin")
console.log(emp)
console.log(emp.getFullName())


// --- Static Methods - Properties

class Circle {
    //static olarak tanımlanan pi değişkeni dışarıdan yeni bir değişken türetilmeden de çağırılabilir hale geliyor.
    static pi : number = 3.14;

    //burada tanımlanmış pi değişkenine erişmek için Circle class'ından yeni bir değişken türetmemiz gerekecektir.
    pi = 3

    constructor(){
        //Circle classından türemiş her eleman alındığında pi 1 artacaktır.
        this.pi++
        
        Circle.pi++
    }
    static hesapla(yaricap: number){
        return this.pi * yaricap * yaricap
    }

}
console.log(Circle.pi) //3.14 çıktısı alırız. Yeni bir değişken türetmeye gerke kalmaz static olarak tanımlandığı için

console.log(Circle.hesapla(10)) //314

let getPi = new Circle()
console.log(getPi.pi) //3

let objem = new Circle()
let objem2 = new Circle()

console.log(objem.pi) //3
console.log(objem2.pi) //3