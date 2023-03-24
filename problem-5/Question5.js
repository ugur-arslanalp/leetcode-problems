/*
https://leetcode.com/problems/container-with-most-water/description/

I created two variables left and rightContainer. Left container is the first element of the array and right is the last.
While left container is less that right I calculated the area between left and right and if its more than maxArea I changed the value of maxArea to it.
After that I incread left if the leftContainer.th element of heigth is less than right so that if there is a bigger value maybe the area between left and right is bigger.
I did the same with right container and in each iteration I checked the value of currentArea is bigger than maxArea. In the end I returned maxArea.
*/

var maxArea = function (height) {
  let leftContainer = 0;
  let rightContainer = height.length - 1;
  let maxArea = 0;

  while (leftContainer < rightContainer) {
    let currentArea =
      Math.min(height[leftContainer], height[rightContainer]) *
      (rightContainer - leftContainer);
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    if (height[leftContainer] <= height[rightContainer]) leftContainer++;
    else rightContainer--;
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 3, 7, 2, 5, 4, 9, 2, 5]));
