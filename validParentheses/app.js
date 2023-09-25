/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  const base = "() {} []";

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const checker = base.includes(
      stack[stack.length - 2] + stack[stack.length - 1]
    );

    if (checker) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
console.log(isValid("(]"));

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false
