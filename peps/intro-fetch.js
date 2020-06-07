const fetch = require('node-fetch')

const url = 'https://swapi.dev/api/planets/'

// function fetchSwapi(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(resp => resp.json())
//             .then(data => {
//                 resolve(data)
//             })
//             .catch(err => reject(err))
//     })

// }

// fetchSwapi(url).then(data => console.log(data))


/***********************
 *  NOT WAITING FOR IT
 ***********************/
function test() {
    let next = true
    let urls = [url]
    let count = 0
    while (next && count < 100) {
        console.log('count', ++count)
        fetch(urls[urls.length - 1])
            .then(resp => resp.json())
            .then(data => {
                console.log('fetch')
                next = data.next ? true : false
                next && urls.push(data.next)
            })
    }
    console.log(urls)
}

test()

/********************************
 *  WAITING FOR THE ASYNC FETCH
 ********************************/
async function test() {
    let next = true
    let urls = [url]
    let count = 0
    while (next && count < 100) {
        console.log('count', ++count)
        await fetch(urls[urls.length - 1])
            .then(resp => resp.json())
            .then(data => {
                console.log('fetch')
                next = data.next ? true : false
                next && urls.push(data.next)
            })
    }
    console.log(urls)
}

test()
