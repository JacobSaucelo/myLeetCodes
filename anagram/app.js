/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const a = s.split("").sort();
  const b = t.split("").sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("hello", "jello"));
console.log(isAnagram("hello", "loelh"));

// const isAnagram = function (s, t) {
//   const a = s.split("").sort().join("").toLowerCase();
//   const b = t.split("").sort().join("").toLowerCase();
//   return a === b;
// };
