/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/



function rot13(str) {
    var lower = "abcdefghijklmnopqrstuvwxyz",
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        mod = upper.length;

    return str
        .split('')
        .map(function (i) {
            return i.match(/[a-zA-Z]/)
                ? (i.charCodeAt(0) < 90)
                    ? upper[(upper.indexOf(i) + 13) % mod]
                    : lower[(lower.indexOf(i) + 13) % mod]
                : i;
        })
        .join('');
}