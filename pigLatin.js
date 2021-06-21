/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !

*/

function pigIt(str) {
    const arr = str.split(' ')
    return arr
        .map((word) => {
            return word.match(/[A-z]/i)
                ? `${word.substr(1)}${word.substr(0, 1)}ay`
                : word
        })
        .join(' ')
}

console.log(pigIt('Pig Latin is cool !'));

/*
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/