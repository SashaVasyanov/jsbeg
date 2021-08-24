
// const firstName = 'Lui'
// // const age = '28'
// // const lastName = 'Valua'

// // alert('Nom de roi: ' + firstName + ', ans de roi: ' + age)

// const lastName = prompt('Entrez vootre nom')
// alert(firstName + ' ' + lastName)

// const currentYear = 2021
// const birthYear = 1954
// const age = currentYear - birthYear
// console.log(age)
// const a = 10
// const b = 5
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// let c = 32 
// c = c + a
// c += a 
// console.log(c)

// const roi = true
// const name = 'Vasya'
// const age = 19 
// let x
// null
// console.log(typeof roi)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null )

// const fullAge = 54
// const birthYear = 1967
// const currentYear = 2021
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)


// const courseStatus = 'not'
// if (courseStatus === 'ready'){
//     console.log('Курс уже готов')
// } else if (courseStatus === 'pending') {
//     console.log('курс в процессе')
// } else {
//     console.log('курса нет')
// }

// const isReady = true
// // if (isReady) {
// // console.log('Ok')
// // } else {
// //     console.log('Not ok')
// // }

// isReady ? console.log('Ok') : console.log('Not ok')

// Функции 

// function calculateAge(year) {
//     return 2021 - year
// }
// const myAge = calculateAge(1993)
// console.log(myAge)
// console.log(calculateAge(2015))
// console.log(calculateAge(1820))
// console.log(calculateAge(1420))

// function logInfoAbout(name, year) {
// const age = calculateAge(year)
// if (age > 0) {
//     console.log('lomme ' + name + ' maintenant ' + age)
// } else {
//     console.log('ppc')
// }

// }
// logInfoAbout('Sasha', 1993)
// logInfoAbout('Vasya', 1289)
// logInfoAbout('Aboba', 2400)

// Массивы 
// const cars = ['ford', 'mers', 'audi']

// const cars = new Array('ford', 'mers', 'audi')
// console.log(cars)
// console.log(cars[2])

// cars[0] = 'peugeot'
// cars[3] = 'ford'

// Циклы

//  const cars = ['ford', 'mers', 'audi']
// // for (let i = 0; i < cars.length; i++) {
// // const car = cars[i]
// //     console.log(i)

// // }
// for (let car of cars) {
//     console.log(car)
// }

// Объекты 

// const person = {
//     firstName: 'Sasha',
//     lastName: "Vasyanov",
//     year: 1992,
//     languages: ['rus', 'fra', 'eng'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet')
//     }

// }
// console.log(person.languages)
// person.greet()
// person.hasWife = true
// person.isAnimeDebil = false
// console.log(person)
// const key = 'languages'
// console.log(person[key])

// let topvasyans = ['iyla', 'panov', 'vadim', 'maxclo', 'misha', 'vladisla']
// for (let i = 0; i < topvasyans.length; i++) {
//     alert(topvasyans[i] + ' - это васян')}

// let user = {
//     name = 'Vasya',
//     age: 15,
//     country = 'France'
// };

// for (let prop in user) {
//     console.log(prop + ': ' + user[prop])
// }


// ЦИКЛЫ
// let i = 1; 
// let msg = '';
// while (i < 10) {
//   msg += i + ' x 3 = ' + (i * 3) + '<br>';  
//   i++;
// }
// document.write(msg);

// let x = 4;
// let faf = ' ';
// while (x < 228 + 1) {
//     faf += x + ' x -1.231494 = ' + (x * (-1.231494)) + '<br>';
//     x++;
// }
// document.write(faf);

// let z = 5;
// let result = ' ';
// do {
//     z += 5;
//     result += z + ' '
// } while (z < 30)
// document.write(result)

// for (var count = 1; count < 3; count++) {
//     document.write(count + ". Строка цикла<br>");
//     for (var nestcount = 1; nestcount< 3; nestcount++) {
//       document.write("Строка вложенного цикла<br>");
//     }
//   }

//   for (let p = 2; p < 8; p++) {
//       document.write(p + ' Первый цикл <br>');
//       for (let p2 = 1; p2 < 8 + 1; p2++){
//           document.write(p2 + ' Второй цикл <br>')
//       }
//   }

// for (let i = 1; i < 500 + 1; i++) {
//     if (i == 50 + 1){
//         break
//     }
//     document.write(i)
//     document.write(' <br>');
// }
//f (j == 3) break; // Выход из самого внутреннего цикла
//         // if (i == 4) break innerloop; // То же самое
//         if (i == 4) break outerloop; // Выход из внешнего цикла
//         document.write("i = " + i + " j = " + j + "<br>");
//       } outerloop:
//   for(var i = 0; i < 10; i++) {
//     innerloop:
//       for(var j = 0; j < 10; j++) {
//         i
//     }
// document.write("FINAL i = " + i + " j = " + j + "<br>");
// var i;
//   for(i = 4; i <= 21; i++) {
//     if (i % 5 !== 1) {
//       continue;
//     }
//     document.write("<br><b>чётное число</b> = " + i);
//   }

// ФУНКЦИИ 
//Function Declaration
// function greet(name)/* в скобках находятся аргументы функции */ {
//     console.log('Здарова - ', name)
// } // в фигурных скобках тело функции, которое будет выполняться в момент вызыва функции

// greet('Абоба')
// FUNCTION EXPRESSION
// const greet2 = function greet2(name) {
//     console.log('Привет 2 -', name)

// }
// greet2('Abobus')

// const abob = function abob() {
//     var i;
//   for(i = 2; i <= 12; i++) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//    document.write("<br><b>чётное число</b> = " + i);
//   }
// }
// abob()
// abob()

// for (let z = 0; z < 10; z++){
// abob()
// }


// Анонимные функции
// let counter = 0 
// const it = setInterval(function() {
//     if (counter === 12) {
//         clearInterval(it)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 СТРЕЛОЧНЫЕ ФУНКЦИИ 

// const strela = (s) => {
// console.log('Чма - ', s)
// } 
// strela('Suzuka')
// const creatname = UserName => console.log("User name", UserName)
// creatname('')
// creatname('xvf')

// const pow2 = num => num ** 2
// console.log(pow2(1488))

// const PayClient = (name, age, budget) => {
//     console.log('Имя', name, '\tВозраст', age,'\nБюджет', budget)
// }
// PayClient('Саша', 22, 1500 + 'р')

//4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

// const mult = (a, b = 10) => a * b
// console.log(mult(44, 1232131))

// function summAll(...all) {
//     let res = 0
//     for (let num of all) {
//         console.log(res, '+', num)
//         res += num
//         console.log(res)
//     }
//     return res
// }
// const z = summAll(45)
// console.log(z)


