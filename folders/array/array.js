"use strict";

// array
//     Massiv bir nechta qiymatlarni o'z ichiga olishi mumkin bo'lgan maxsus o'zgaruvchidir:

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//   yoki no array
// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

//      massiv bitta nom ostida  kop qiymatlarni  saqlashi mumkin  va
//      biz ularni chaqrishda indexlardan foidalanmiz
//      ularni  const kalit sozi va [] ochib elon qilish odatiy usuli

//      biz  index raqamiga murojat qillib massivga  elementiga kiramiz

//     const cars = ["Saab", "Volvo", "BMW"];
//     let car = cars[0];

//     const cars = [];
//     cars[0]= "Saab";
//     cars[1]= "Volvo";
//     cars[2]= "BMW";

// array methods [

//     JavaScript usuli toString()massivni (vergul bilan ajratilgan) massiv qiymatlari qatoriga aylantiradi.

//     Usul join(), shuningdek, barcha massiv elementlarini satrga birlashtiradi.

//     U xuddi shunday ishlaydi toString(), lekin qo'shimcha ravishda siz ajratuvchini belgilashingiz mumkin:

//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.join(" * ");

//     Usul pop()massivdan oxirgi elementni olib tashlaydi:

//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.pop();

//      shift esa buni teskarisi

//     Usul push()massivga yangi element qo'shadi (oxirida):

//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.push("Kiwi");
//      unshif esa buning teskarisi

//     Xususiyat lengthmassivga yangi element qo'shishning oson yo'lini taqdim etadi:

//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits[fruits.length] = "Kiwi";
//     ]

//     Usul concat()mavjud massivlarni birlashtirish (birlashtirish) orqali yangi massiv yaratadi:

//     const myGirls = ["Cecilie", "Lone"];
//     const myBoys = ["Emil", "Tobias", "Linus"];

//     const myChildren = myGirls.concat(myBoys)

//     Usul splice()massivga yangi elementlar qo'shadi.

//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.splice(2, 0, "Lemon", "Kiwi");

//     Usul slice()massivning bir qismini yangi massivga ajratadi.

//     Ushbu misol 1-massiv elementidan (???Apelsin???) boshlanadigan massivning bir qismini ajratadi:

//     const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//     const citrus = fruits.slice(1);
