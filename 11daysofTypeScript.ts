// Interface 
/* 
TypeScript'deki interface, temelinde bir tip tanımından başka birşey 
değildir. class ve function'lar nesnelerin davranışlarını tanımlarken,
interface'ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz.
*/
console.log('Interfaace')

//without Interface

function getFullName(person : {
    firstName : string,
    lastName : string
}){
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName : 'Deniz',
    lastName : 'Yetişkin'
}
console.log(getFullName(person))//Deniz Yetişkin


//with Interface

interface Fruit {
    fruitName : string,
    fruitKg : number,
    fruitColor ?: string 
}

function getFruit (fruit : Fruit){
    return `${fruit.fruitName} ${fruit.fruitKg}`
}

let fruit = {
    fruitName : 'apple',
    fruitKg : 5
}
console.log(getFruit(fruit)) //apple 5

//Interface Optional Parameters Readonly Functions Type

interface Apple{
    name : string,
    kg : number,
    color? : string //burada color propertysi opsiyoneldir. 
}

function getApple(apple : Apple){
    
    if(apple.color){
        return `${apple.name} ${apple.kg}  ${apple.color}`
    }
    return `${apple.name} ${apple.kg}`

}
let apple = {
    name : 'Apple',
    kg : 2,
}
console.log(getApple(apple)) //apple 2

let banana : Fruit ={
    fruitName : 'Banana',
    fruitKg : 3,
    fruitColor : 'Yellow'
}

//Interface Function Type

interface StringFormat{
    (str : string, isUpper : boolean) : string
}

let format : StringFormat;

format = function (str : string, isUpper : boolean){
    return isUpper === true ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
}

console.log(format('deniz', true))

//Interface Extend Etme ve Bir class'a interface implement etme

//Bir interface'i birden fazla interface'e extends edebilriiz. 

interface IPerson {
    name : string,
    gender : string
}

interface IEmployee extends IPerson {
    empNumber : number
}

interface IWorker  extends IPerson {
    empDepartmet  :string
}

let isciOsman : IEmployee = {
    name : 'Osman',
    gender : 'male',
    empNumber : 1212
}

console.log(isciOsman)

let employeeDepartment : IWorker = {
    empDepartmet : 'HR',
    name : 'Hasan',
    gender : 'Female',
}
console.log(employeeDepartment)

//Class'a interface implemente etme

//interface'te tanımlanılan bütün propertyler class içerisinde tekrar belirtilmeli
class Firma  implements IPerson {
    name : string;
    gender : string; 
    empNumber :number
    constructor(empNumber : number , name : string, gender: string){
        this.empNumber = empNumber
        this.name = name
        this.gender = gender
    }
}

let isciVeysel = new Firma(12, 'Veyse', 'Male')
console.log(isciVeysel) //Firma {empNumber: 12, name: 'Veyse', gender: 'Male'}

