# lesson -12<p>Mavzu : Object </p>
 - **Obyekt :** JavaScript obyektga yo'naltirilgan dasturlash tilidir. Obyekt, ma'lumotlarni saqlash uchun bir qator xususiyatlar (properties) va uslublar (methods)ni o'z ichiga oladi. Masalan, document obyekti brauzerda HTML sahifaning elementlariga kirish imkonini beradi.

```
const card = {
    nom : "S class",
    marca : "MersadesBens",
    tez : 360,
    ras : "8l-10l",
    yil : 2001,
    rang : "seri",
    fullHarc : function(){
         console.log(this.marca + " " + this.nom + " " + this.tez  )
    }

}

card.fullHarc
```
## Object Metodlari:
- **Object.keys():** Obyektning xususiyatlarini (property) ro'yxatini qaytaradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var keys = Object.keys(myObject);
console.log(keys); // ["name", "age", "city"]

```
- **Object.values():** Obyektning xususiyatlarining qiymatlarini ro'yxatini qaytaradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var values = Object.values(myObject);
console.log(values); // ["John", 25, "New York"]
```

- **Object.entries():**
Bu metod obyektni bir nechta massivlarga aylantiradi, har biri xususiyat va uning qiymatini o'z ichiga oladi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var entries = Object.entries(myObject);
console.log(entries);
// [["name", "John"], ["age", 25], ["city", "New York"]]
```
- **Object.assign():**
Bu metod obyektlarni birlashtirish (merge) uchun ishlatiladi.

```
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);
// { a: 1, b: 3, c: 4 }
```

- **hasOwnProperty():**
Bu metod obyektning belgilangan xususiyati borligini tekshiradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
console.log(myObject.hasOwnProperty('age')); // true
console.log(myObject.hasOwnProperty('gender')); // false
```
- **delete:**
Bu operator obyektning xususiyatini o'chiradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
delete myObject.age;
console.log(myObject); // { name: 'John', city: 'New York' }
```