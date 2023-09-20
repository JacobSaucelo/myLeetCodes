/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let hash = new Map();
  let bucket = [];
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    }
  }

  for (let [num, freq] of [...hash.entries()]) {
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(num);
    } else {
      bucket[freq] = bucket[freq].add(num);
    }
  }

  for (let j = bucket.length - 1; j >= 0; j--) {
    if (bucket[j]) results.push(...bucket[j]);
    if (results.length === k) break;
  }

  return results;
};

// console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 2], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([3, 0, 1, 0], 1));

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
