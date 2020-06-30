function log(...str) {
    console.log(...str)
}

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
let why = ['1', '2']

let all = [who, what, when, why]

let arr = []
let mem = ''

/*
The way this one works is: for every element in a [ 'John', 'Peps' ], concat 
every element of b [ ' jumps ', ' codes ' ].. then reduce it to leave only one 
single arr with all the elements.
[ 'John jumps ', 'John codes ', 'Peps jumps ', 'Peps codes ' ]

In the second round, a is what was left over from the first iteration, which is
a single list with every element of a concated w every element of b, this arr is
now going to get concated w every element of the new b [ 'in the afternoon.', 'at night.' ], 
looking like this
[ [ 'John jumps in the afternoon.', 'John jumps at night.' ],
  [ 'John codes in the afternoon.', 'John codes at night.' ],
  [ 'Peps jumps in the afternoon.', 'Peps jumps at night.' ],
  [ 'Peps codes in the afternoon.', 'Peps codes at night.' ] ]

And w the reduce, it will all be put in a single array
[ 'John jumps in the afternoon.',
  'John jumps at night.',
  'John codes in the afternoon.',
  'John codes at night.',
  'Peps jumps in the afternoon.',
  'Peps jumps at night.',
  'Peps codes in the afternoon.',
  'Peps codes at night.' ]
*/
function loop(x) {
    return x.reduce((a, b) => {

        log('a', a)
        log('b', b)

        let r = a.map(x => {
            let w = b.map(y => {
                let q = x.concat(y)
                return q
            })
            return w
        })

        log('r', r)

        let s = r.reduce((a, b) => {
            let e = a.concat(b)
            log('2a', a)
            log('2b', b)
            log('2reduce', e)
            return e
        })

        log('s', s)
        return s
    })
}


loop(all)




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
            console.log('reduce', q)
            return q
        })
    }
}


// console.log('total', getPINs(all))



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