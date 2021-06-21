/*
Greed is a dice game played with five six-sided dice.
Your mission, should you choose to accept it, is to score a throw according to these rules.
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll.
For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or
as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function.
This is something that you should never do. If you mutate the input,
you will not be able to pass all the tests.

*/

function score(dice) {
    let scores = {};
    let returnValue = 0;
    for (let i in dice) {
        if (scores[dice[i]]) {
            scores[dice[i]]++;
        } else {
            scores[dice[i]] = 1;
        }
    }
    for (let i in scores) {
        let s = scores[i];

        if (i == 1 && s >= 3) { returnValue += 1000; s -= 3; }
        if (i == 2 && s >= 3) { returnValue += 200; s -= 3; }
        if (i == 3 && s >= 3) { returnValue += 300; s -= 3; }
        if (i == 4 && s >= 3) { returnValue += 400; s -= 3; }

        if (i == 5 && s >= 3) { returnValue += 500; s -= 3; }
        if (i == 6 && s >= 3) { returnValue += 600; s -= 3; }
        if (i == 1) returnValue += s * 100;
        if (i == 5) returnValue += s * 50;

    }
    return returnValue;
}

console.log(score([5, 1, 3, 4, 1]));

/*
var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
  */