// prompt('Your name')
// confirm('Are you ready')
// alert('1488')

// setTimeout(() => {
//     const heading = document.getElementById('51')
//     console.dir(heading.textContent)
//     heading.textContent = 'je aime la beaucoup'
//     heading.style.color = 'white'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'blue'
//     heading.style.padding = '1rem'
// }, 1500)
// const headin2 = document.getElementsByTagName('h2')
const heading = document.getElementById('51')
// const headin2 = document.getElementsByClassName('h2-class')[0]

//  const headin2 = document.querySelector('.h2-class')
const headin2 = document.querySelector('#sub')
console.log(headin2)

setTimeout(() => {
    addStylesto(heading)
}, 1000)

function addStylesto(node) {
    node.textContent = 'je aime la beaucoup'
    node.style.color = 'white'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'blue'
    node.style.padding = '1rem'
}

