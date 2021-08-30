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
const heading = document.getElementById("51");
// const headin2 = document.getElementsByClassName('h2-class')[0]

//  const headin2 = document.querySelector('.h2-class')
const heading2 = document.querySelector("#sub");
console.log(heading2);
// const heading3 = headin2.nextElementSibling;
const h2list = document.querySelectorAll('h2')
console.log(h2list)
const heading3 = h2list[1]
console.log(heading3)
// console.log(heading3)
setTimeout(() => {
  addStylesto(heading, 'Je aime toi beaucoup', 'green');
}, 1000);
const link = heading3.querySelector('a')

link.addEventListener('click', () => {
    console.log('click on link')
})
setTimeout(() => {
    
    addStylesto(link, 'Practices!', 'white');
  }, 2500);

  setTimeout(() => {
    addStylesto(heading2, 'XVF', 'yellow', '5rem');
  }, 2500);

function addStylesto(node, text, color = 'red', fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = 'black';
  node.style.padding = "1rem";
  node.style.display = 'block'
  node.style.width = '100%'
  if (fontSize) {
      node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'grey'
    } else { heading.style.color = 'red'
    heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = 'green'
    } else { heading2.style.color = 'yellow'
    heading2.style.backgroundColor = 'black'
    }
})