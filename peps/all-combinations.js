const lock = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
]

let coordinates = {
    '1': ['2', '4'],
    '2': ['1', '5', '3']
}

function getPins(pin) {
    if (isNaN(pin) || pin.length < 1 || pin.length > 8)
        return 'Invalid pin'

    let allVariations = []
    for (let e of pin) {
        let temp = [e]

    }
}

function createCoordinates() {
    let coords = {}
    for (let i in lock)
        for (let j in lock[i]) {
            coords[lock[i][j]] = getSurroundings(Number(i), Number(j))
        }
}

function getSurroundings(i, j) {
    let mem = []
    if (lock[i + 1] !== undefined && !isNaN(lock[i + 1][j]))
        mem.push(lock[i + 1][j])
    if (lock[i - 1] !== undefined && !isNaN(lock[i - 1][j]))
        mem.push(lock[i - 1][j])
    if (lock[i])

}

// let i = 2; let j = 3;
// [i, j] = [i + 1, j + 1]
// console.log(i, j)