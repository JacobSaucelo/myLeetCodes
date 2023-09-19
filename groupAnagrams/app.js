/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map();

  for (let i = 0; i < strs.length; i++) {
    let value = strs[i].split("").sort().join("").toLocaleLowerCase();
    if (hash.has(value)) {
      hash.get(value).push(strs[i]);
    } else {
      hash.set(value, [strs[i]]);
    }
  }

  return Array.from(hash.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/* //!!! HOLY SHIT 
Runtime
100ms
Beats 85.71% of users with JavaScript

Memory
100ms
Beats 93.58% of users with JavaScript
*/
