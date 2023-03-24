/*
https://leetcode.com/problems/factorial-trailing-zeroes/description/

To find how many 0 are there in a factorial number we have to find out how many times it was multiplied with 5.
If n=10  we need to find how many times 5 was multiplied in 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 . => There is 5 and there is 10 which is 5 * 2. So there is 2 zeros in the end of the result.
In the function I counted how mant times there was 5 in a for and used a while loop in it. If the number is less than 5 I returned 0 and If its greater I iterated the number from 5 to n and added 5 to i every iteration.
And in each iteration I used a while loop to check if there is more than one 5 multiplication in the number. Sı if the number is 10 there is one 5 but if the number is 25 there are two 5s.
 I increased the counter according to that and returned counter.
 */

var trailingZeroes = function (n) {
  let counter = 0;
  if (n < 5) return 0;
  else {
    for (let i = 5; i <= n; i += 5) {
      let num = i;
      while (num % 5 === 0) {
        num /= 5;
        counter++;
      }
    }
  }
  return counter;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(0));
console.log(trailingZeroes(26));
