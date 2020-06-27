const lock = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
]

const coords = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '4'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9'],
    '9': ['6', '8', '9'],
    '0': ['8', '0']
}

// function getPins(pin) {
//     if (isNaN(pin) || pin.length < 1 || pin.length > 8)
//         return 'Invalid pin'

//     let allVariations = []
//     for (let e of pin)
//         allVariations.push(coords[e])

//     answer = []
//     for (let arr of allVariations) {

//     }
// }



let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']

let all = [who, what, when]

let arr = []
let mem = ''
function loop(x) {
    return x.reduce((a, b) => a.map(x => b.map(y => x.concat(y)).reduce((a, b) => a.concat(b), [])), [[]])
}


// console.log(loop(all))




// PROTOTYPES
Array.prototype.myUcase = function () {
    // console.log(this)
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

// let arr = ['asdf', 'lkj']
// arr.myUcase()
// console.log(arr)

// console.log([] instanceof Array)
// console.log({} instanceof Array)

// console.log('sdf'.constructor.name)
// console.log([].constructor.name)
// console.log({}.constructor.name)




// RECURSION PRACTICE
let obj = {
    one: [2, 3, 4, 5, { y: '5', x: '6' }, 6, 7],
    two: {
        t: 'sdf',
        i: 'iii',
        a: ['yoshi', 'mario', { super: 'mario' }]
    },
    three: 'uioiuo',
    four: '5223',
    five: 'mario'
}

function findMario(item) {
    if (typeof item === 'string' && item === 'mario')
        console.log(item)
    if (typeof item === 'object') {
        if (Array.isArray(item))
            for (let e of item)
                findMario(e)
        else
            for (let e of Object.values(item))
                findMario(e)
    }
}

// findMario(obj)



// ONLINE SOLUTION

function getPINs(observed) {
    const _ = undefined
    const pad = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        [_, '0', _]
    ]
    const keys = observed//.split('').map(o => getSiblingKeys(o.toString(), pad))
    const results = cartesian(keys)//.map(arr => arr.join(''))

    return results

    function cartesian(arr) {
        return arr.reduce((a, b) => {
            let q = a.map((x) => b.map((y) => {
                let w = x.concat(y)
                console.log('concat', w)
                return w
            }))
            console.log('map', q)
            q = q.reduce((a, b) => a.concat(b))
            console.log('redue', q)
            return q
        })
    }
}


console.log('total', getPINs(all))



String.prototype.log = function () {
    let x = ''
    for (let e of this)
        x += e
    console.log(x)
}

let xxx = 0
function x() {
    console.log(++xxx)
    if (xxx < 5) x()
}



// console.log([1, 2, 3].reduce((a, b) => (a + b)))
// console.log([1, 2, 3].reduce((a, b) => (a + b), []))



// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const flat = data.reduce((total, amount) => {
//     let x = total.concat(amount)
//     console.log('x', x)
//     return x
// });

// console.log(flat)