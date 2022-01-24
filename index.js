import twoSum from "./Questions/easy-1-TwoSum.js";
import isPalindrome from "./Questions/easy-2-Palindrome.js";
import isValid from "./Questions/easy-3-VaildParanthesis.js";
import maxNumberOfBalloons from "./Questions/easy-4-MaximumNumberOfBallons.js";
import removeDuplicates from "./Questions/easy-5-RemoveDuplicatesFromSortedArray.js";
import removeElement from "./Questions/easy-6-RemoveElement.js";
import isAnagram from "./Questions/easy-7-ValidAnagram.js";
import countUniqueValues from "./Questions/easy-8-countUniqueValues.js";
import averagePair from "./Questions/easy-9-AveragePair.js";
import isSubsequence from "./Questions/easy-10-isSubsequence.js";
import maxSubarraySum from "./Questions/easy-11-MaxSubArraySum.js";
import searchInsert from "./Questions/easy-14-SearchInsertPosition.js";
import fizzBuzz from "./Questions/easy-15-FizzBizz.js";
import lengthOfLastWord from "./Questions/easy-16-LengthOfLastWord.js";
import isPerfectSquare from "./Questions/easy-18-perfectSquare.js";

import * as easyRecursion from "./Questions/easy-12-recursion.js";
import * as mediumRecursion from "./Questions/medium-13-recursion.js";
import mySqrt from "./Questions/easy-17-sqrt.js";

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
// answer = isSubsequence("hello", "hello world");
// answer = maxSubarraySum([2, 3], 3);
// answer = easyRecursion.power(2, 2);
// answer = easyRecursion.factorial(7);
// answer = easyRecursion.productOfArray([1, 2, 3, 10]);
// answer = easyRecursion.recursiveRange(6);
// answer = easyRecursion.fib(6);
// answer = mediumRecursion.reverse("awesome", 1);
// answer = searchInsert([1, 3, 5, 6], 5);
// answer = fizzBuzz(15);
// answer = lengthOfLastWord("Hello World");
// answer = mySqrt(25);

answer = isPerfectSquare(16);
console.log(answer);
