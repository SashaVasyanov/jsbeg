// number
// const float = 42.42
// const por = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) -1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN)
// if (isNaN(NaN)) {
//     console.log("cma ilya")
// } else {
//     console.log('mameprivet')
// }
// const weird = 2 / undefined
// console.log(isNaN(weird))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 4)
// console.log(Number.parseInt(stringInt) + 1488)
// console.log(+stringInt + 228)
// console.log(+stringFloat + 54)

// console.log(+(0.4 + 0.2).toFixed(1))

// BigInt
console.log(typeof 900719925474099199n)

// Math 
// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(17, 3))
// console.log(Math.abs(-54))
// console.log(Math.max(11, 543, 213, 21321, 1))
// console.log(Math.min(11, 543, 213, 21321, 1))
// console.log(Math.floor(1321.1234))
// console.log(Math.ceil(1321.1234))
// console.log(Math.random)

// Пример

function getRandomBeetwen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log (getRandomBeetwen(42, 51))