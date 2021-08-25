const auto = ["auto1", "auto2", "auto3", "auto4"];
const fib = [1, 1, 2, 3, 5, 8, 13];

const gens = [
  { name: "Vasya", budget: 1500 },
  { name: "Lexa", budget: 500 },
  { name: "Sasha", budget: 2000 },
];
// console.log(fib)

// МЕТОД
// auto.push('auto5')
// auto.unshift('auto0')
// auto.shift()
// const fisrtauto = auto.shift()
// const lastauto = auto.pop()
// console.log(auto)
// console.log(fisrtauto)
// console.log(lastauto)

// const index = auto.indexOf('auto3')
// auto[index] = 'auto12'
// console.log(auto)
// console.log(auto[index])

// let findGen
// for (const person of gens) {
//     console.log(person)
//     if (person.budget === 2000){
//         findGen = person
//     }
// }
// console.log(findGen)

// const index = gens.findIndex(function(person){
// return person.budget === 2000
// })
// console.log(index)
// console.log(gens)
// console.log(gens[index])
// const person = gens.find(person => person.budget === 2000)
// console.log(person)
// console.log(auto.reverse())
// console.log(auto)

// console.log(auto.includes('auto1'))

// const text = 'Я учу - язык программирования'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// const UpperAuto = auto.map(auto => {
//     return auto.toUpperCase()
// })
// console.log(UpperAuto)

// const pow2 = (num) => num ** 2;
// // const sqrt = num => Math.sqrt(num)

// // const pow2Fib = fib.map(pow2).map(sqrt)
// // console.log(pow2Fib)
// const pow2Fib = fib.map(pow2);
// const filterNum = pow2Fib.filter((num) => {
//   return num > 20;
// });
// console.log(filterNum);
// console.log(pow2Fib);

const budget1 = gens.filter(person => person.budget > 1000). reduce((acc, gens) => {
 acc += gens.budget;
  return acc;
}, 0);
console.log(budget1);

