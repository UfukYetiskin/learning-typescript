// ------ Type Intersection ---------
console.log('----- Type Intersection -----');
var meral = {
    name: 'Meral',
    email: 'meral@hotmail.',
    phone: '562731231',
    id: 1231
};
console.log(meral);
var musteri = {
    name: 'Ferat',
    email: 'ferat@hot',
    credy: 12312,
    phone: '123123441'
};
console.log(musteri);
// ---- Type Guard ---- 
console.log('---- Type Guard ---- ');
function add(a, b) {
    //return a+b ile fonksiyon içerisinde veri döndüremiyoruz bu yüzden bir koşul oluşturmamız gerkemektedir.
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Types are different');
}
console.log(add('3', '5')); //35
var Family = /** @class */ (function () {
    function Family() {
    }
    Family.prototype.isParent = function () {
        return true;
    };
    return Family;
}());
var NotFamiliy = /** @class */ (function () {
    function NotFamiliy() {
    }
    NotFamiliy.prototype.isUncle = function () {
        return false;
    };
    return NotFamiliy;
}());
function isAkrabalar(partner) {
    var message;
    if (partner instanceof Family) {
        message = partner.isParent() ? "Evet bunlar aile" : "Aile değil";
    }
    if (partner instanceof NotFamiliy) {
        message = partner.isUncle() ? "Evet bunlar aile" : "Aile değil";
    }
    //return message
}
