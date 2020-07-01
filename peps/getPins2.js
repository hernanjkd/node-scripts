let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']
let why = ['1', '2']

let all = [who, what, when, why]

function recursion(arr) {
    let answer = []

    const loop = (arr, vars = '') => {
        if (arr.length === 0)
            answer.push(vars)
        else {
            let a = [...arr]
            for (let e of a.shift())
                loop(a, vars + e)
        }
    }

    loop(arr)
    console.log('recursion', answer)
}

recursion(all)



function noLoop(arr) {
    console.log('noLoop',
        arr.reduce((a, b) => (
            a.map(x => b.map(y => x.concat(y)))
                .reduce((a, b) => a.concat(b))
        ))
    )
}

// noLoop(all)