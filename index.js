import twoSum from "./easy-1-TwoSum.js";
import isPalindrome from "./easy-2-Palindrome.js";
import isValid from "./easy-3-VaildParanthesis.js";
import maxNumberOfBalloons from "./easy-4-MaximumNumberOfBallons.js";
import removeDuplicates from "./easy-5-RemoveDuplicatesFromSortedArray.js";

let answer;

// answer = twoSum([2, 7, 11, 15], 9);
// answer = isPalindrome(1221);
// answer = isValid("([){()}[]");
// answer = maxNumberOfBalloons("balon");

answer = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(answer);
