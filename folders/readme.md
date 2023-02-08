# Day 1

#### JavaScriptga kirish

1. JavaScript nima ?

2. JavaScriptni HTML ga bog'lash
   script src

2.1"use stricy " nima ?

3. alert()ogohlantiruvchi oyna ,

prompt() , 
 Modal oyna ichiga yozish

confirm() ,
OK va cancel tugmalaridan iborat modal oyna
document.write() ,

innerHTML

# Day 2

1. Variables (o'zgaruvchilar) var , let , const , (difference)
2. Data types

- String
  har qanday "" ichida yozilgan qiymat bu string hisoblanadi
- Number
  sonlar ishtrokidagi qiymat
- Boolean

- Undefined
  bor lekin qiymati yoq
- null umuman yoq

- BigInt(9007199254740991)

- Symbol('Hello JavaScript')

2. "use strict"

3. appropriation operators (o'zlashtirish operatorlari)
4. comparison operators (taqqoslash operatorlari)
5. Object Math
   Math ob'ektida konstruktor yo'q.

6. type conversions

<hr>

# Day 3

1. Conditional operator "if else"

2. Ternary operator

3. "switch" statement

4. Loops: while and for ( while, do..while and for(..;..;..) )

for-kod blokini bir necha marta aylantiradi
for/in- ob'ektning xossalari bo'ylab aylanish
for/of- takrorlanadigan ob'ektning qiymatlari bo'ylab aylanish
while- belgilangan shart to'g'ri bo'lganda kod bloki bo'ylab aylanish
do/while- belgilangan shart rost bo'lganda ham kod bloki orqali aylanadi 5. Function and function types

5. matematik operatorlar
JavaScript Math obyekti raqamlar ustida matematik vazifalarni bajarishga imkon beradi.
<hr>

# Day 4

1. Function arrow func const
   const myFunction = (arg1, arg2, ...argN) => {
   statement(s)
   }

/ func expression

const function myFunction =(arg1, arg2, ...argN) {

/ func declaration

function myFunction (obj) {
}

2. function parametrs

- Arguments
- Default parametr

3. Array

- ### Array simple methods

- .push(4);
- .pop();
- .shift();
- .unshift(0);
- .concat('c');
- .join('-');
- .slice(1);
- .indexOf('b');
- .includes('c');

3. ### String methods

- String.length
- String.trim()
- String.toUpperCase();
- String.toLowerCase();
- String.substring(x,y);

- String.search();
- String.trim();
  bosh joyni qirqib beradi

- String.match();

- charAt(n)

<hr>

# Day 5

1.  Object
2.  to bulild methods
3.  Object methods

    - Object.keys(testScore); // gives all keys

    - Object.values(testScore); // gives all values

    - Object.entries(testScore) ichida key bor yoki yoq ekanligin tekshirib beradi

4.  Locating DOM elements using selectors

    - getElementsByTagName()

    - getElementsByClassName()

    - getElementById()

    - querySelector()

    - querySelectorAll()

5.  HTML DOM Element style Property

<hr>

# Day 6

1. Events
2. addEvenetListener / on (difference)
3. JavaScript DOM events

Mouse events:

- click
- dblclick

- mouseover
- mouseout

- mouseup
- mouseup

Keyboard events:

- Keydown
- Keyup
- Kuypress

Form events:

- focus
- submit
- blur
- change
- input

Scroll & window Event

- scroll
- DOMContentLoaded
- load

<hr>

# Day 7

1.  setAttribute()
2.  getAttribute()
3.  practice (toggle menu)
4.  setInterval() / clearInterval( )
5.  setTimeOut() / clearTimeout( )

<hr>

# Day 8

1. setInterval() / clearInterval( )
2. setTimeOut() / clearTimeout( )
3. JavaScript Date Objects [new Date()]
4. LIVE 🕙 🔥🔥
5. classList

   - add()
   - remove()
   - toggle()
   - contains()

6. PRACTICE SLIDER 🔥🔥
7. Create Dynamic Element In Javascript
<hr>

# Day 9

1. Create Dynamic Element In Javascript
2. Higher order functions

   - Array Method .reduce()
   - Array Method .forEach()
   - Array Method .filter()
   - Array Method .map()

3. Extra methods

   - Array Method .reverse()
   - Array Method .find()
   - Array Method .sort()

   - numArray.sort((a, b) => a - b); // For ascending sort
   - numArray.sort((a, b) => b - a); // For descending sort

4. Custom selector function (Plugin)
5. practice
<hr>

# Day 10

1. Mavzularni qaytarish
2. Function Scope, Block Scope, Global Scope
3. Template tag
4. RegExp() & ASCII code

- https://regexr.com/
- https://www.ascii-code.com/
- **Higher order functions**
<hr>

# Day 11

1. **Movies app** (practice)
2. Find duplicates in an array using javaScript
3. **findElement** function
4. eventDelegation
5. dataset . . .

<hr>

# Day 12

1. Takrorlash
2. . . .
3. . . . . .

<hr>

<hr>

# Day 13

1. Mavzularni takrorlash (umummiy)
2. Object , to built methods

- Object.keys(testScore); // gives all keys
- Object.values(testScore); // gives all values
- Object.entries(testScore)

3. Javascript ‘this’ keyword (Context)

<hr>

# Day 14--

1. **Movies app** (practice)
2. Find duplicates in an array using javaScript
3. **findElement** function
   Javascriptdagi arr.find () usuli massivdagi berilgan shartni qanoatlantiradigan birinchi elementning qiymatini olish uchun ishlatiladi.
   U massivning barcha elementlarini tekshiradi va qaysi birinchi element shartni qanoatlantirsa, chop etiladi.
   Bu funksiya massivning bo‘sh elementlariga ega bo‘lgan funksiyada ishlamaydi, shuningdek, asl massivni o‘zgartirmaydi.

array.find(funksiya (joriy qiymat, indeks, arr), buValue);

4. RegExp() & ASCII code
   JavaScript- dagi RegExp test() usuli qatordagi moslikni tekshirish uchun ishlatiladi.
   Agar mos keladigan bo'lsa, bu usul " true " ni qaytaradi , aks holda " false " ni
   qaytaradi
   RegExpObject.test(str)

Bu erda str - izlanadigan qator. Bu talab qilinadigan maydon.
1-misol: Bu misol asl satrdagi “kompyuter” qatorini qidiradi.

Muntazam ibora belgilar qolipidir .
Naqsh matnda naqshga mos keladigan "qidirish va almashtirish" funktsiyalarini bajarish uchun ishlatiladi.
JavaScript-da RegExp ob'ekti Xususiyatlar va usullarga ega naqshdir .
regular exp ni new kalit sozi bilan yaratamiz, oz ichiga qiymat oladi

# Day 15

1. eventDelegation
   Voqealar delegatsiyasi asosan voqealarni samarali boshqarish uchun namunadir.
   Har bir shunga o'xshash elementga hodisa tinglovchisini qo'shish o'rniga,
   biz voqea tinglovchisini ota-elementga qo'shishimiz va voqea ob'ektining
   .target xususiyatidan foydalanib,
   ma'lum bir maqsadda hodisani chaqirishimiz mumkin.

Keling, hodisa delegatsiyasi bilan va bo'lmagan misolni ko'rib chiqaylik

const customUI = document.createElement('ul');

uchun (var i = 1; i <= 10; i++) {
const newElement = document.createElement('li');
newElement.textContent = "Bu chiziq" + i;
newElement.addEventListener('click', () => {
console.log('Javob berilmoqda')
})
customUI.appendChild(newElement);
}

Yuqoridagi kod funksiyani quyidagi rasmda ko'rsatilgan har bir <li> element bilan bog'laydi. Biz <ul> elementini yaratmoqdamiz,
juda ko'p <li> elementlarni biriktirmoqdamiz va uni yaratishda har bir paragrafga javob beruvchi funksiyaga ega voqea tinglovchisini biriktirmoqdamiz.

https://media.geeksforgeeks.org/wp-content/uploads/20200918155519/first.png

2. dataset . . .

// Importing the tensorflow.js library
const tf = require("@tensorflow/tfjs")

// Creating tenst dataset of array
const array = [[1, 4, 6], [2, 5, 7],
    [3, 6, 8], [4, 7, 9], [5, 8, 11]];

// Making dataset with array
const gfg = tf.data.array(array);

// Creating new dataset
const GFG = gfg.batch(2);

// Printing Dataset
GFG.forEachAsync(Q => Q.print());

3. Template tag

4. shallow copy vs deep copy
   Massivning birinchi ikkita elementini oxirgi ikkita massiv elementiga nusxalash:
   Birinchi ikkita massiv elementini uchinchi va to'rtinchi pozitsiyalarga nusxalash:

Usul copyWithin()massiv elementlarini massivning boshqa pozitsiyasiga ko'chiradi.

Usul copyWithin()mavjud qiymatlarni qayta yozadi.

Usul copyWithin()massivga elementlar qo'shmaydi.

5. rest % spread operator

6. localStorage

- setItem()
- getItem()
- removeItem()
- clear()
- "storage"

7. JSON (stringify, parse);

- <img src="https://telegra.ph/file/969c879f8ef2e930bec3c.png" width="600">

# Day 16

1. CallBack function

2. **Synchronous" 1 , 2 element bor agar biz 1 ci elementni tanlamoqchi bolsak 2 elementga .Synchronous kalit sozini kiritamz" and Asynchronous (1,2 elementlatmiz agar biz 2 elementni tanlamoqci bolsak 1 elementga Asynchronous kalit sozini kiritamz )**

What is the difference between synchronous and asynchronous code in JavaScript ?

2. Promise

- Pending
- fullfiled
- rejected

3. fetch
   JavaScript- dagi fetch() usuli serverdan ma'lumotlarni so'rash uchun ishlatiladi. So'rov JSON yoki XML formatida ma'lumotlarni qaytaradigan har qanday turdagi API bo'lishi mumkin. fetch() usuli bitta parametrni talab qiladi , so'rov uchun URL manzili va va'dani qaytaradi .

Qaytish qiymati: U hal qilinganmi yoki yo'qmi, va'dani qaytaradi. Qaytish ma'lumotlari JSON yoki XML formatida bo'lishi mumkin. Bu ob'ektlar massivi yoki oddiygina bitta ob'ekt bo'lishi mumkin.

<hr>
### CallBack ?

 <img src="https://telegra.ph/file/df6d89e674ebc224f831a.png" width="600">
### Async and Sync difference

<img width="600" src="https://aaryanadil.com/synchronous-and-asynchronous-javascript-examples/images/synchronous-vs-asynchronous.jpg">

<hr>

### Practices async function

<img width="600" src="https://adrianmejia.com/images/synchronous-asynchronous-javascript.png">

<hr>

### Promise (

- Pending
- fullfiled
- rejected

)

  <img width="600" src="https://javascript.info/article/promise-basics/promise-resolve-reject.svg">

# Day 17

1. Takrorlash
2. PRAY TIME API (amaliyot)
3. API so'rovlari:

- Bugungi namoz vatlarini olish uchun: https://islomapi.uz/api/present/day?region=Toshkent

- Shu hafta uchun namoz taqvimi olish uchun: https://islomapi.uz/api/present/week?region=Toshkent

- Bir kun uchun namoz taqvimini olish uchun: https://islomapi.uz/api/daily?region=Toshkent&month=4=4&day=5

Bir oylik namoz taqvimini olish uchun: https://islomapi.uz/api/monthly?region=Toshkent&month=4

<hr>

# Day 18

1. C post
   R get
   U put
   D delete

## CRUD ?
