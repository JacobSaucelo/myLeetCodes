/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = [];
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined) {
      pre[i] = nums[i];
    } else {
      pre[i] = pre[i - 1] * nums[i];
    }

    // let value = !nums[i - 1] ? nums[i] ----: pre[i - 1] * nums[i];
    // pre[i] = value;
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j + 1] === undefined) {
      console.log("pre", pre, "post", post, "nums", nums);
      pre[j] = pre[j - 1];
      post = nums[j];
    } else {
      console.log("pre", pre, "post", post, "nums", nums);
      pre[j] = (pre[j - 1] === undefined ? 1 : pre[j - 1]) * post;
      post = post * nums[j];
    }
  }

  return pre;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
