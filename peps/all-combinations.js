const lock = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
]

function getPins(pin) {
    if (pin.length < 1 || pin.length > 8)
        return 'Invalid pin'

    let allVariations
}