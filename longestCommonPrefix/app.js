/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (strs.length < 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (character !== strs[j][i]) return prefix;
    }
    prefix = prefix + character;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
