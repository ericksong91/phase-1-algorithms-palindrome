function isPalindrome(word) {
  let checkWord = splitPalindrome(word)
  if(checkWord === word){
    console.log("true")
  }else {
    console.log("false")
  }
  return Boolean(checkWord === word)
}

function splitPalindrome(word){
  let wordArray = word.split("")
  let newWord = forLoopPal(wordArray)

  return newWord
}

function forLoopPal(ary){
  let palArray = []
  for (let i = ary.length - 1; i >= 0; i--){
    palArray.push(ary[i])
  }
  return recombine(palArray)
}

function recombine(e){
  let x = e.join('')
  return x
}

isPalindrome("racecar")

/* 
  Add your pseudocode here

  function that turns the word into an array, split by " " a space.

  function that identifies the center letter

  function that checks to see if there is two of each letter

  OR 

  function that turns the word into an array, split by " " a space.

  function that reverses the order of that array using a for loop

  the for loop will load each letter backwards into the empty word array until i >= 0 (which should terminate it at array[0])
  this for loop should decrease by 1 every loop, while pushing letters into the array

  another function to recombine the array into a string using join()

  return that to original handler array, do a === to check if the words match

  ended up doing the 2nd way

*/

/*
  Add written explanation of your solution here

  This is code to see if a word is a palindrome. A palindrome is a word that can be written the same way forwards
  and backwards. To check for this, we could seperate each word into an array of letters. One common pattern with palindromes
  seem to be that they all have a "center" letter. Would it be possible to do all the work to remove the center letter and then check to see
  if there is two of each letter besides the center letter? 

  OR 

  Maybe easier, is just to seperate the word into an array, then reverse the order of that array to see if 
  it is a === match with the original string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
