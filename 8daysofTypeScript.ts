console.log('Eighth Day of React')

// ------- If Else -Ternary Operator

let x : number = 15;
let y : number = 25;

// -------- If else 
if(x > y) {
    console.log('x is bigger than y')
}else{
    console.log('y is bigger than x')
}


// ------- Ternary Operator 
x > y ? console.log('x is bigger than y') : console.log('y is bigger than x')

//------ Switch Case

let day : number = 5

switch(day)
{   
    case 0: {
    console.log('Pazar')
    break;
    }
    case 1: {
        console.log('Pazartesi')
        break;
    }
    case 2: {
    console.log('salı')
    break;
    }
    case 3: {
        console.log('Çarşamba')
        break;
    }
    case 4:
        console.log('Perşembe')
        break;
    case 5: 
        console.log('Cuma')
        break;
    case 6: 
        console.log('Cumartesi')
        break;
    default: 
        break;
}


// ------- For Loop
for(let i=0; i<3; i++){
    console.log(i)
}

//for of, array için kullanılır
let arr = [10, 20, 30, 40]
let total =0;
for(let item of arr){
    total += item
    console.log(total)
}
console.log(total)

let str = "Ümmühan Gümüş"
for(let item of str){
    console.log(item)
}

//for in ile dizi içerisindeki elemanların index değerlerini alabiliriz
for(let item in arr){
    console.log(item)
}

// ------- While Loop 
let counter = 0;
while(counter < 5){
    console.log(counter)
    counter++
    if(counter === 2){
        continue;
    }
}