/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let preOrder = [];
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i - 1] === undefined ? nums[i] : nums[i] * preOrder[i - 1];
    preOrder[i] = value;
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (preOrder[j + 1] === undefined) {
      preOrder[j] = preOrder[j - 1];
      post = nums[j];
    } else {
      preOrder[j] =
        (preOrder[j - 1] === undefined ? 1 : preOrder[j - 1]) * post;
      post = post * nums[j];
    }
  }

  return preOrder;
};
// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
