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

function getPins(pin) {
    if (isNaN(pin) || pin.length < 1 || pin.length > 8)
        return 'Invalid pin'

    let allVariations = []
    for (let e of pin)
        allVariations.push(coords[e])

    answer = []
    for (let arr of allVariations) {

    }
}



let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']

let all = [who, what, when]

function loop(x) {
    let mem = ''
    if (typeof x === 'string') {
        return x
    }
    if (x instanceof Array && x.length > 0)
        for (let e of x)
            if (e instanceof Array)
                for (let k of e)
                    mem += loop(k)
            else mem += loop(e)
    return mem
}

console.log(loop(all))




// PROTOTYPES
Array.prototype.myUcase = function () {
    // console.log(this)
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

let arr = ['asdf', 'lkj']
arr.myUcase()
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
