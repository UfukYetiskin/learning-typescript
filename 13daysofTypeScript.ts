// ---- Generics ----- 
console.log('---- Generics ----- ')

//Generics , yani tek bir bileşen yerine çeşitli türler üzerinde çalışabilen bir bileşen oluşturabilmektir. Bu, kullanıcıların bu bileşenleri tüketmelerine ve kendi türlerini kullanmalarına olanak tanır.

function getRandomNumber(items : number[]): number{
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex] 
}

let numbers = [12 , 213,5, 12, 222]
console.log(getRandomNumber(numbers))

const getRandomString = (items : string[]) : string => {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

let strings = ['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ufuk']
console.log(getRandomString(strings))

//yukarıda yapılan kod tekrarından kurtulmak için any type'ı kullanılabilir ama bu type safe değil o yüzden önerilmez.
const getRandomElement = (items : any[]) : any => {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

console.log(getRandomElement(strings))
console.log(getRandomElement(numbers))


//TypeScript otomatik olarak type inference yardımı ile girilen verilerin typelarına bakarak T'nin type'nı atadı.
function getRandomItem <T>(items : T[]) : T {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

let booleans = [true , false, false, true, true]


//Type atamasına bakmadan direk istediğimiz type'ı da belirtebiliriz.
console.log(getRandomItem<string>(strings))
console.log(getRandomItem(numbers))
console.log(getRandomItem<boolean>(booleans))