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