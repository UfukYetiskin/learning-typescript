// ----------- Functions ----------- 

console.log('----------- Functions ----------- ')


//add fonksiyonun geriye number type'ında bir değer döndüreceğini belirtiriz
function add(a : number, b:number) : number{
    return a+b;
}
let toplam = add(10, 3)
console.log(toplam)

//bastir fonksiyonu geriye bir değer döndürmüyordur. Type'ı void'tir.
function bastir(): void{
    console.log('Void Function')
}
bastir()

//String bir değer döndüren fonksiyon
function birlestir(ad: string, soyad : string, yas : number = 18): string{
    return ad + " " + soyad + " " + yas
}
console.log(birlestir('Deniz', 'Yetişkin'))


//Arrow Functions

//c değişkeninin opsiyonel olduğunu belirttik. Eğer c'ye değer verirsek if koşuluna girer. 
const carp = (a: number, b: number, c?: number ) => {
    if(typeof c !== 'undefined'){
        return a*b*c
    }
    return a * b 
}
console.log(carp(3,3)) //9
console.log(carp(3, 3, 3))//27


//Function Overloading

//Burada sum fonksiyonun parametrelerinin ya string ya da number değer alabileceğini belirtiyoruz
function sum(a:number, b:number):number;
function sum(a:string, b:string) : string;

//yukarıda tanumlanmış sum fonksiyon ve değişken typelarından birinin geldiğinde değer döndürmesi için any verilir.
function sum(a:any, b:any) : any{
    return a + b
}
console.log(sum("Ufuk", "Gümüş"))