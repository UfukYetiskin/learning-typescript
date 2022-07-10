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
    fruitKg : number
}

function getFruit (fruit : Fruit){
    return `${fruit.fruitName} ${fruit.fruitKg}`
}

let fruit = {
    fruitName : 'apple',
    fruitKg : 5
}
console.log(getFruit(fruit))


