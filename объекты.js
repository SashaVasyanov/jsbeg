const person = {
    name: 'Dasha',
    age: 16,
    isModel: true,
    langueages: ['ru', 'eng', 'de', 'fra'],
//     greet() {
// console.log('привет от меня')
    }


// console.log(person.name)
// console.log(person.age)
// console.log(person.langueages)

// person.langueage.push('spa')
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.langueages

// const {name, age: personAge = 10, langueages} = person

// for (let keyyz in person) {
//     if (person.hasOwnProperty(keyyz)){
//     console.log('ключ', keyyz)
//     console.log('value', person[keyyz])
// }
//     }      

// const keys = Object.keys(person)
// console.log(keys)

Object.keys(person).forEach((key) => {
    console.log('key',typeof key)
    console.log('value', person[key])
})


const key = 'name'
console.log(person[key])

