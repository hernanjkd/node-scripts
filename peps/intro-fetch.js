const fetch = require('node-fetch')

const url = 'https://swapi.dev/api/planets/'

function fetchSwapi(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })

}

// fetchSwapi(url).then(data => console.log(data))

async function test() {
    let more = true
    let urls = [url]
    while (more) {
        await fetch(urls[urls.length - 1])
            .then(resp => resp.json())
            .then(data => {
                more = data.next ? true : false
                urls.push(data.next)
            })
    }
    console.log(urls)
}

test()
