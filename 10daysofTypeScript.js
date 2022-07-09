// -------- Class ----------- 
console.log('Classes');
var Kisi = /** @class */ (function () {
    function Kisi(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Kisi.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Kisi;
}());
var kisiBilgisi = new Kisi(16219049, 'Ufuk', 'yetişkin');
console.log(kisiBilgisi);
console.log(kisiBilgisi.getFullName());
