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
console.log(getFruit(fruit)); //apple 5
function getApple(apple) {
    if (apple.color) {
        return "".concat(apple.name, " ").concat(apple.kg, "  ").concat(apple.color);
    }
    return "".concat(apple.name, " ").concat(apple.kg);
}
var apple = {
    name: 'Apple',
    kg: 2
};
console.log(getApple(apple)); //apple 2
var banana = {
    fruitName: 'Banana',
    fruitKg: 3,
    fruitColor: 'Yellow'
};
var format;
format = function (str, isUpper) {
    return isUpper === true ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('deniz', true));
var isciOsman = {
    name: 'Osman',
    gender: 'male',
    empNumber: 1212
};
console.log(isciOsman);
var employeeDepartment = {
    empDepartmet: 'HR',
    name: 'Hasan',
    gender: 'Female'
};
console.log(employeeDepartment);
//Class'a interface implemente etme
//interface'te tanımlanılan bütün propertyler class içerisinde tekrar belirtilmeli
var Firma = /** @class */ (function () {
    function Firma(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Firma;
}());
var isciVeysel = new Firma(12, 'Veyse', 'Male');
console.log(isciVeysel); //Firma {empNumber: 12, name: 'Veyse', gender: 'Male'}
