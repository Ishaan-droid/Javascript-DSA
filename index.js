import twoSum from "./easy-1-TwoSum.js";
import isPalindrome from "./easy-2-Palindrome.js";
import isValid from "./easy-3-VaildParanthesis.js";
import maxNumberOfBalloons from "./easy-4-MaximumNumberOfBallons.js";
import removeDuplicates from "./easy-5-RemoveDuplicatesFromSortedArray.js";
import removeElement from "./easy-6-RemoveElement.js";
import isAnagram from "./easy-7-ValidAnagram.js";
import countUniqueValues from "./easy-8-countUniqueValues.js";
import averagePair from "./easy-9-AveragePair.js";
import isSubsequence from "./easy-10-isSubsequence.js";

let answer;

// answer = twoSum([2, 7, 11, 15], 9);
// answer = isPalindrome(1221);
// answer = isValid("([){()}[]");
// answer = maxNumberOfBalloons("balon");
// answer = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// answer = removeElement([3, 2, 2, 3], 3);
// answer = isAnagram("a", "ab");
// answer = countUniqueValues([-2, -1, -1, 0, 1]);
// answer = averagePair([-1, 0, 3, 4, 5, 6], 2.5);

answer = isSubsequence("hello", "hello world");
console.log(answer);
