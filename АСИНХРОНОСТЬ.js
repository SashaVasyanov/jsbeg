//EVENT LOOP

// const timeout = setTimeout(() => {
// console.log('time has come')
// }, 2500) 

// clearTimeout(timeout)


// const interval = setInterval(() => {
//     console.log('time has come')
//     }, 1000) 
    
//     // clearInterval(interval)

    // const delay = (callback, wait = 1000) => {
    // setTimeout(callback, wait) 
    // }

    // delay(() => {
    //     console.log('after all')
    // }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => { 
            resolve()
        }, wait)
    })
    return promise
}

delay(2500)
.then(() => {
console.log('after one seconds')
})
.catch( err => console.error(err))
.finally(() => console.log('finnaly'))