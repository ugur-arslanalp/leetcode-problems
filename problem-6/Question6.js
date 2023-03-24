/*
https://leetcode.com/problems/jump-game/description/

I created a variable step and assigned it to the first element of nums array.
Then in a for loop I decreased step by one to simulate that every iteration the function used one step to reach to target.
if step is less than 0 I returned false because there is no more steps left and the target hasn't been reached.
If the ith element of nums -Array is greater than step value I changed step to that value. If its less than steps we dont have to change steps value because we can use the remaining steps that we already have.
And if its greater I changed steps value to increase the steps that we have. If we never return false in the for loop that means we have enough steps to reach the target and return true.
*/

var canJump = function (nums) {
  let step = nums[0];
  for (let i = 1; i < nums.length; i++) {
    step--;
    if (step < 0) return false;
    if (nums[i] > step) {
      step = nums[i];
    }
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
