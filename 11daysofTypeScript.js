// Interface 
/*
TypeScript'deki interface, temelinde bir tip tanımından başka birşey
değildir. class ve function'lar nesnelerin davranışlarını tanımlarken,
interface'ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz.
*/
console.log('Interfaace');
//without Interface
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'Deniz',
    lastName: 'Yetişkin'
};
console.log(getFullName(person)); //Deniz Yetişkin
function getFruit(fruit) {
    return "".concat(fruit.fruitName, " ").concat(fruit.fruitKg);
}
var fruit = {
    fruitName: 'apple',
    fruitKg: 5
};
console.log(getFruit(fruit));
