// -------- Class ----------- 
console.log('Classes')

class Kisi{
    id: number;
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