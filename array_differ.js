/* 

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

// Do not forget to use SET

/*
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}
*/

/*
function array_diff(a, b) {
  return a.filter(x => b.indexOf(x) == -1);
}
*/

function arrayDiff(a, b) {
    if ((a.length && b.length) > 0) {
        return diff = a.filter((num) => !b.includes(num));
    }
    else if (b.length == 0) {
        return a;
    }
    else {
        return a;
    }
}

console.log(arrayDiff([9, -13, -14, 7, 20, -17, -17, -10, 13], [-13, -14, 13, 7, -10]));