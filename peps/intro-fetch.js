const fetch = require('node-fetch')

const url = 'https://swapi.dev/api/planets/'

fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))