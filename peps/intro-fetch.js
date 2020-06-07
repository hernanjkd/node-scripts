const fetch = require('node-fetch')

const url = 'https://swapi.dev/api/planets/'

fetch(url)
    .then(response => response.json())
    .then(info => {

    })


