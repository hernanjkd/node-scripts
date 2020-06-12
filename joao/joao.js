const fs = require(`fs`);
var tester = require('./test.js')

function compareJSON(a, b) {
    a = { ...a };
    b = { ...b };
    var onlyA = onlyB = {};
    var same = {};
    Object.keys(a).forEach(e => {
        if (a[e] === b[e]) {
            same[e] = a[e];
            delete a[e];
            delete b[e];
        }
        else onlyA[e] = a[e]
    })
    return { same, onlyA, onlyB: b }
}

var api1 = `http://api.local/v1`;
var api2 = `http://api-qa.catalogs.com/v1`;

let x = tester.test(api2, './api1.json');
let y = tester.test(api2, './api2.json');


Promise.all([x, y])
    .then(([x, y]) => {
        var obj = compareJSON(x, y);
        fs.writeFile('compareJSON.json', JSON.stringify(obj, null, 4), `utf8`, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`saved`);
            }
        });
    })
    .catch(err => console.log('There has been an error'));

// (async () => {

//     try {
//         let x = await tester.test(api1, './api1.json');
//         let y = await tester.test(api1, './api2.json');
//         console.log(x, y);
//     }
//     catch {
//         console.log('ERROR IN TRY CATCH')
//     }
//     finally {
//         console.log('I HAVE LEAVE IN PEACE')
//     }


// })();