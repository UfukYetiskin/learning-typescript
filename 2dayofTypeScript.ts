// ---- Functions Types --------

//tanımlanılan bu fonksiyonda eğer return ile bir ifade döndürülmeseydi void type olacaktı. return 25 ile type'ı number oldu
function makingSomeThing(){
    return 25;
}

//değer deişkeninin type'ı numberdır. Başka bir type atayamayız as ile
const deger = makingSomeThing();

//Type vererek fonksiyon oluşturma
function example1() : number{
    return 25;
}
//or
function example2() : number | string {
    return 'ufuk';
    //or
    //return 27
}
//or
//tuple örneği
function example3() : [number, string]{
    return [25,'Ümmühan']
}

//or
function kisi(isim : string, soyisim : string, yas : number){
    console.log({isim,soyisim,yas})
}

kisi('Ümmühan', 'Yetişkin', 23)

//or
function PromiseExample (parameters : {
    isim : string;
    soyisim : string;
    yas : number;
}) : Promise <number>{
    return new Promise((resolve, reject) =>{
        resolve(23);
    })
} 

PromiseExample({isim : 'Ufuk', soyisim: 'Yetişkin', yas : 26})

// Odev

function writeName(isim : string, tekrar: number): void {
    for(let i = 0; i< tekrar; i++){
        console.log(isim)
    }
}
writeName('Ümmühan', 10);


// ---------  Tip İsimlendirme | Type Aliasing ---------- 
