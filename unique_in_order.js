/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueI nOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
    return (typeof iterable == "object") ? iterable.filter((v, i, a) => a[i] !== a[i + 1])
        : iterable.split("").filter((v, i, a) => a[i] !== a[i + 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));