/* 
https://leetcode.com/problems/unique-paths/description/

This is a combination problem. The combination formula in mathematics is C(x,y) = x! / y! * (x-y)!
  In the problem totalSteps = x . That means the number of steps you must take to reach the target.
  mFactorial = y
  divisionFactorial = (x-y)  */

var uniquePaths = function (m, n) {
  let totalSteps = m - 1 + (n - 1);
  let totalStepsFactorial = 1;
  let mFactorial = 1;
  let divisionFactorial = 1;
  for (let i = 1; i <= totalSteps; i++) {
    totalStepsFactorial *= i;
  }
  for (let i = 1; i <= m - 1; i++) {
    mFactorial *= i;
  }
  for (let i = 1; i <= totalSteps - (m - 1); i++) {
    divisionFactorial *= i;
  }
  return totalStepsFactorial / (mFactorial * divisionFactorial);
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
