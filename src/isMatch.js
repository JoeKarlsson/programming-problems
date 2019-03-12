var _ = require("underscore");

/* 
Your previous Plain Text content is preserved below:

# Implement a wildcard matching function with support for the wildcard
# character *. The character * should match any sequence of characters, 
# including the empty sequence.

# Method Signature
#
# pattern
# - (String with characters [a-z], *)
# - the pattern to test string against.
#
# string
# - (String with characters [a-z])
# - the input string that will be tested against pattern
#
# Returns boolean of whether or not string matches pattern.
def isMatch(pattern, string):

# Examples
isMatch("c*t", "cat") -> True
isMatch("a*a", "alpha") -> True
isMatch("d*og", "dog") -> True
isMatch("d*t", "door") -> False
isMatch("c*t", "cute") -> False
isMatch("r*nd*y", "randomly") -> True
isMatch("*a", "haha") -> True
isMatch("*ss*", "espresso") -> True
 */

const isMatch = (pattern, string) => {
  let pos = 0;
  pattern = pattern.split("");
  string = string.split("");
  let targetChar = pattern[0];

  for (let i = 0; i < pattern.length; i++) {
    let currChar = pattern[i];

    if (currChar !== "*") {
      if (currChar !== string[pos]) {
        return false;
      }
      pos++;
    } else if (currChar === "*") {
      // final *

      targetChar = pattern[i + 1]; // a
      if (!targetChar) {
        return false;
      }

      let currStringChar = string[pos]; // h
      while (currStringChar !== targetChar) {
        currStringChar = string[++pos];

        if (!currStringChar) {
          return false;
        }
      }
    }
  }

  if (pos !== string.length) {
    return false;
  }

  return true;
};

// console.log(isMatch("c*t", "cat"), 'isMatch("c*t", "cat")');
// console.log(isMatch("a*a", "alpha"), 'isMatch("a*a", "alpha")');
// console.log(isMatch("d*og", "dog"), 'isMatch("d*og", "dog")');
// console.log(isMatch("d*t", "door"), 'isMatch("d*t", "door")');
// console.log(isMatch("c*t", "cute"), 'isMatch("c*t", "cute")');
// console.log(isMatch("r*nd*y", "randomly"), 'isMatch("r*nd*y", "randomly")');
console.log(isMatch("*a", "haha"), 'isMatch("*a", "haha")');
// console.log(isMatch("*ss*", "espresso"), 'isMatch("*ss*", "espresso")');

// isMatch("a*a", "alpha")
// isMatch("d*og", "dog")
// isMatch("d*t", "door")
// isMatch("c*t", "cute")
// isMatch("r*nd*y", "randomly")
// isMatch("*a", "haha")
// isMatch("*ss*", "espresso")
