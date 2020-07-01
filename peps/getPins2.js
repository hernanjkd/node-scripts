let who = ['John', 'Peps']
let what = [' jumps ', ' codes ']
let when = ['in the afternoon.', 'at night.']
let why = ['1', '2']

let all = [who, what, when, why]



function recursion(arr) {
    let answer = []
    loop(arr)
    return answer

    function loop(arr, vars = '') {
        if (arr.length === 0)
            answer.push(vars)
        else {
            let a = [...arr]
            for (let e of a.shift())
                loop(a, vars + e)
        }
    }
}

// console.log('recursion', recursion(all))



function noLoop(arr) {
    return arr.reduce((a, b) => (
        a.map(x => b.map(y => x.concat(y)))
            .reduce((a, b) => a.concat(b))
    ))
}

// console.log('noLoop', noLoop(all))