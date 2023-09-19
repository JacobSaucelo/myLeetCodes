// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const collection = [nums1, nums2, nums3];

for (let iteration = 0; iteration < 3; iteration++) {
  const uniqueCharacters = new Set(collection[iteration]);
  if (uniqueCharacters.size === collection[iteration].length) {
    console.log(false);
  } else {
    console.log(true);
  }
}
