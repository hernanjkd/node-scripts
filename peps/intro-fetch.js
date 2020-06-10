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
// function test() {
//     let next = true
//     let urls = [url]
//     let count = 0
//     while (next && count < 100) {
//         console.log('count', ++count)
//         fetch(urls[urls.length - 1])
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log('fetch')
//                 next = data.next ? true : false
//                 next && urls.push(data.next)
//             })
//     }
//     console.log(urls)
// }

// test()

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

function processResults(results) {
    let alphabetNames = []
    let backwards = []

    let sortedNames = results.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA > nameB)
            return 1;
        return -1;
    })

    let urlNums = []
    for (let i in results) {
        urlNums.push(findNum(results[i].url))
    }

    let missing = []
    for (let i = 1; i <= findNum(results[results.length - 1].url); i++) {
        if (!urlNums.includes(i)) {
            missing.push(i)
        }
    }


    for (let e of results) {
        alphabetNames.push(e.name)
    }

    return missing;
}
