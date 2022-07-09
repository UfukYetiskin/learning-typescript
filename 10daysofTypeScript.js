var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// ---- Acces Modifiers (Public | Private | Protected)
//Kisi class'ının özellikleri (id, firstName, lastName) varsayılan (default) olarak publictir. Publick olması sayesinde istediğimiz yerden o özelliği çekebiliyoruz.
//Private, tanımlanılan değişken ya da özellik sadece tanımlandığı scope içerisinde kullanılabilir.
//Protected ile class içerisinde tanımlanmış özellikler sadece class içerisinde ve classı extends alan classlar içerisinde kullanılabilir.
//----- Readonly
//Class içerisindeki değere dışarıdan erişebiliyoruz fakat bu değeri dışarıdan değiştiremiyoruz.
//---- Inheritance
//Employee class'ı child classtır. Kisi class'ından değerleri (id, firstName, lastName) initialize ediyoruz.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Kisi));
var emp = new Employee(1239123, "Ümmühan", "Yetişkin");
console.log(emp);
console.log(emp.getFullName());
