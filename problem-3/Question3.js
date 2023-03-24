/*
https://leetcode.com/problems/powx-n/description/

I did this using recursive approach. If n is divisable by 2 it calls itself again with x*x and n/2 and return the result.
If n is not divisable by 2 it calss itself with x and n-1 and multiply it with x. The function calls itself until n === 0 and then return 1.
And if n<0 I changed x to 1/x and n to -n . After that the negativity ends and the function works like the n value is positive.
*/

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) return myPow(x * x, n / 2);
  else return x * myPow(x, n - 1);
};

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
