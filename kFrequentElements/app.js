/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let hashMap = new Map();
  let bucket = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let tmpHashMap = hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1;
    hashMap.set(nums[i], tmpHashMap);
  }

  for ([number, freq] of hashMap) {
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(number);
    } else {
      bucket[freq].add(number);
    }
  }

  for (let j = bucket.length - 1; j >= 0; j--) {
    if (bucket[j]) {
      result.push(...bucket[j]);
    }
    if (result.length === k) break;
  }

  return result;
};

// console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1, 2], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([3, 0, 1, 0], 1));

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
