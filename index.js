function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  
    for (let i = 0; i < len / 2; i++) {

        if (word[i] !== word[len - 1 - i]) {
          return false;
        }
    }
    return true;
}

console.log(isPalindrome("abba"))

/* 
  Add your pseudocode here
Input a String
Initialize string length to zero 
loop through half of the string
check if first and last string are same
if they are the same;
Return word Is a Palindrome
else
Return word Is Not a Palindrome
Stop
*/

/*
  Add written explanation of your solution here
  A palindrome is used to check if a series of numbers, strings, or letters
  read from left to right and right to left matches or returns the same sequence of characters.
  1. find the length of a string
  2. loop through half of the string
  3. check if first and last string are same
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));

//   console.log("");
  

//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("mom"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("cup"));

// }

module.exports = isPalindrome;
