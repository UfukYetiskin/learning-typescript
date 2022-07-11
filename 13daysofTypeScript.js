var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ---- Generics ----- 
console.log('---- Generics ----- ');
//Generics , yani tek bir bileşen yerine çeşitli türler üzerinde çalışabilen bir bileşen oluşturabilmektir. Bu, kullanıcıların bu bileşenleri tüketmelerine ve kendi türlerini kullanmalarına olanak tanır.
function getRandomNumber(items) {
    var randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [12, 213, 5, 12, 222];
console.log(getRandomNumber(numbers));
var getRandomString = function (items) {
    var randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex];
};
var strings = ['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ufuk'];
console.log(getRandomString(strings));
//yukarıda yapılan kod tekrarından kurtulmak için any type'ı kullanılabilir ama bu type safe değil o yüzden önerilmez.
var getRandomElement = function (items) {
    var randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex];
};
console.log(getRandomElement(strings));
console.log(getRandomElement(numbers));
//TypeScript otomatik olarak type inference yardımı ile girilen verilerin typelarına bakarak T'nin type'nı atadı.
function getRandomItem(items) {
    var randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex];
}
var booleans = [true, false, false, true, true];
//Type atamasına bakmadan direk istediğimiz type'ı da belirtebiliriz.
console.log(getRandomItem(strings));
console.log(getRandomItem(numbers));
console.log(getRandomItem(booleans));
// --- Generic Constraints -----
console.log('--- Generic Constraints -----');
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var objs = merge({ name: "Ufuk" }, { name: "Gümüş" });
console.log(objs);
var month = {
    key: 2,
    value: 'January'
};
console.log(month); //{key: 2, value: 'January'}
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
        console.log(this.items);
    };
    List.prototype.remove = function (o) {
        var _this = this;
        (function (o) {
            var index = _this.items.indexOf(o);
            if (index > -1) {
                _this.items.splice(index, 1);
                console.log(_this.items);
            }
        });
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
//Classlarda Generics Kullanımı
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is overflow!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numaralar = new Stack(5);
while (!numaralar.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack"));
    numaralar.push(n);
}
