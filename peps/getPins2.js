let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']


let all = [who, what, when, why]

function loop(arr, vars) {
    if (arr.length === 0)
        console.log(vars)
    else {
        let a = [...arr]
        for (let e of a.shift())
            loop(a, vars + e)
    }
}