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
// --- Static Methods - Properties
var Circle = /** @class */ (function () {
    function Circle() {
        //burada tanımlanmış pi değişkenine erişmek için Circle class'ından yeni bir değişken türetmemiz gerekecektir.
        this.pi = 3;
        //Circle classından türemiş her eleman alındığında pi 1 artacaktır.
        this.pi++;
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    //static olarak tanımlanan pi değişkeni dışarıdan yeni bir değişken türetilmeden de çağırılabilir hale geliyor.
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi); //3.14 çıktısı alırız. Yeni bir değişken türetmeye gerke kalmaz static olarak tanımlandığı için
console.log(Circle.hesapla(10)); //314
var getPi = new Circle();
console.log(getPi.pi); //3
var objem = new Circle();
var objem2 = new Circle();
console.log(objem.pi); //3
console.log(objem2.pi); //3
// ----- Abstract Class 
/*Abstract class, ortak özellikleri olan nesneleri bir çatı altında
toplamak için kullanılır: Sınıfın önüne “abstract” sözcüğü yazılarak
soyutlaştırma işlemi yapılır. Abstract sınıftan kalıtım almak için de
“extends” kullanılır. */
var Departmant = /** @class */ (function () {
    function Departmant(name) {
        this.name = name;
    }
    Departmant.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Departmant;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    //Departmant class'ında abstract olarak tanımlandığı için burada kullanmamız zorunludur.
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department");
    };
    AccountingDepartment.prototype.printHello = function () {
        console.log('Hello');
    };
    return AccountingDepartment;
}(Departmant));
//Abstract class'ın new instance'ı alınamaz. Bu yüzden extend edilmiş class'ın new intance'i alınır.
//let department = new Departmemt()
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.printHello();
