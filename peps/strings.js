function log(str) {
    console.log(str)
}

let x = 'te estas trabando en lo mas facil'

let newStr = ''
for (let e of x) {
    newStr = newStr + e
}

let obj = { a: '123' }

for (let e of x)
    log(obj[e])