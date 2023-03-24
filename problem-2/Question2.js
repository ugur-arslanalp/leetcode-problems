/*
https://leetcode.com/problems/maximum-subarray/description/

On each iteration I added the ith element of array to currentSum and checked if currentSum is more than maxSum.
If it is I assigned maxSum the value of currentSum.
If currentSum is less then 0 I chenged it to 0 so that it won't add negative values one after another.*/

var maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSum = -10001;
  if (nums.length == 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
