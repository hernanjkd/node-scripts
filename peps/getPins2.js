let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']
let why = ['1', '2']

let all = [who, what, when, why]

function
    let arr = []
const loop = (arr, vars = '') => {
    if (arr.length === 0)
        arr.push(vars)
    else {
        let a = [...arr]
        for (let e of a.shift())
            loop(a, vars + e)
    }
}

loop(all)

function noLoop(arr) {
    console.log(
        arr.reduce((a, b) => (
            a.map(x => b.map(y => x.concat(y)))
                .reduce((a, b) => a.concat(b))
        ))
    )
}

noLoop(all)