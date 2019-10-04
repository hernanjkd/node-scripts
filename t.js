const fetch = require('node-fetch');
const fs = require('fs');
const sample = {
    catalog_id: 1,
    type_name: `city`,
    category_id: 2,
}
const endpoints = [
    `/catalogs/${sample.catalog_id}`,
    `/catalogs/${sample.catalog_id}`,
    `/catalogs/${sample.catalog_id}/active`,
    `/catalogs/${sample.catalog_id}/active`,
    `/catalogs/${sample.catalog_id}/products`
];

endpoint_count = 0;

var arr = [];
endpoints.forEach(endpoint => {
    var apicall = 'http://api.catalogs.com/v1' + endpoint;
    fetch(apicall)
        .then(function (data) {
            return data.json().catch(function (error) {
                console.log(apicall + ' has nothing')
            });
        })
        .then(function (json) {
            console.log("***** ", json);
            let result = {
                key: apicall,
                value: json
            };
            arr.push(result);
            endpoint_count++;
            if (endpoint_count === endpoints.length)
                writeToFile();
        });
});

function writeToFile() {
    fs.writeFile('file5.json', JSON.stringify(arr, null, 4), (err) => {
        if (err) throw err;
        console.log('The file has been saved');
    });
}
