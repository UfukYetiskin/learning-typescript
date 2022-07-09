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
