function josephus(items, k) {
    items = [...items]
    let removed = []
    let i = 0
    while (items.length) {
        i = (i + k-1) % items.length
        removed = removed.concat( items.splice(i,1) )
    }
    return removed
}

function log(...args) {
    console.log(...args)
}

function remove(arr, k) {
    arr = [...arr]
    
    let current = -1
    let answer = []
    
    while (arr.length) {
        
           for (let j=0; j<k; j++ ) {
            current++
            if (current > arr.length-1)
                current = 0
        }
        
        answer.push( arr.splice(current, 1)[0] )
        current--
    }
    
    return answer
}

let arr = [1,2,3,4,5,6,7,8,9,]


log( [...[4], ...[5]] )
// log( [...[4]] )
// log( [...[...[4]]] )
// log( [...[...[...[4]]]] )


log( josephus(arr, 1) )
log( josephus(arr, 2) )