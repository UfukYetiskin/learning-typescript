console.log('Eighth Day of React');
// ------- If Else -Ternary Operator
var x = 15;
var y = 25;
// -------- If else 
if (x > y) {
    console.log('x is bigger than y');
}
else {
    console.log('y is bigger than x');
}
// ------- Ternary Operator 
x > y ? console.log('x is bigger than y') : console.log('y is bigger than x');
//------ Switch Case
var day = 5;
switch (day) {
    case 0: {
        console.log('Pazar');
        break;
    }
    case 1: {
        console.log('Pazartesi');
        break;
    }
    case 2: {
        console.log('salı');
        break;
    }
    case 3: {
        console.log('Çarşamba');
        break;
    }
    case 4:
        console.log('Perşembe');
        break;
    case 5:
        console.log('Cuma');
        break;
    case 6:
        console.log('Cumartesi');
        break;
    default:
        break;
}
// ------- For Loop
for (var i = 0; i < 3; i++) {
    console.log(i);
}
//for of, array için kullanılır
var arr = [10, 20, 30, 40];
var total = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    total += item;
    console.log(total);
}
console.log(total);
var str = "Ümmühan Gümüş";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
//for in ile dizi içerisindeki elemanların index değerlerini alabiliriz
for (var item in arr) {
    console.log(item);
}
// ------- While Loop 
var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter === 2) {
        continue;
    }
}
