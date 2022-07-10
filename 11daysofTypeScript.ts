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