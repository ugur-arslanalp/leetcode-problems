/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

I created a new array so that I can add the values of s array into it and than return the length of it.
In the for loop I iterated through the elements of s array and checked if there is that element in newArray. If there is not I push it and then checked if the length of newArray is greater than maxLength.
If it is greater I changed maxLength.
If the ith element in s array exists in newArray I sliced the newArray beginning from the next element of ith element to length of the newArray and push the ith element in s array in newArray.
By doing that if there is an element already in newArray I lose it and continue the loop. In the loop I calculate the length of newArray and change the value of maxLength accourding to that.
And after the loop ends I return maxLength.
*/

var lengthOfLongestSubstring = function (s) {
  let newArray = [];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (newArray.indexOf(s[i]) < 0) {
      newArray.push(s[i]);
      if (newArray.length > maxLength) maxLength = newArray.length;
    } else {
      newArray = newArray.slice(newArray.indexOf(s[i]) + 1, newArray.length);
      newArray.push(s[i]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
