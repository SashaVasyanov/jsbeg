const person = {
  name: "Dasha",
  age: 16,
  isModel: true,
  langueages: ["ru", "eng", "de", "fra"],
  info() {
    console.info("Всё о покупателе:", this.name);
    console.log("это", this);
  },
  //     greet() {
  // console.log('привет от меня')
};

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

// Object.keys(person).forEach((key) => {
//     console.log('key',typeof key)
//     console.log('value', person[key])
// })

// const key = 'name'
// console.log(person[key])

// CONTEXT

// person.info()

// const logger = {
//     keys(obj) {
//         console.log('Object K ', Object.keys(obj))
//     }
// }
// logger.keys(person)

const logger = {
  keys() {
    console.log("Object K ", Object.keys(this));
  },
  KeysAndValue() {
    Object.keys(this).forEach((key) => {
      console.log(key, this[key]);
    });
  },
  withParams(top = false, between = false, bottom = true) {
    if (top) {
      console.log("sssssssssssSssssssss");
    }
    Object.keys(this).forEach((key) => {
      console.log(key, this[key]);
      if (between) {
        console.log("========================");
      }
      if (bottom) {
        console.log("PPPPPPPPPPPPPP");
      }
    });
  },
};

logger.withParams.call(person, true)
// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)
// logger.KeysAndValue.call(person)

// function sayHello(firstName, lastName) {
//   console.log(`Hello, {firstName} {lastName}`);
// }

// sayHello("Alex", "NAV"); // Hello, Alex NAV
