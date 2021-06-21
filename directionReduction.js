function dirRec(arr) {
    const opposites = { 'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST' };
    const result = []
    arr.forEach(item => {
        if (result.length) {
            const prevItem = result.pop()
            if (prevItem !== opposites[item]) {
                result.push(prevItem)
                result.push(item)
            }
        } else {
            result.push(item)
        }
    })
    return result;
}

console.log(dirRec(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

/*
function dirReduc(arr){
    let str = arr.join("")
    let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
    while(pattern.test(str)) {
        str = str.replace(pattern, '')
    }

    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
*/