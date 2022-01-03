function isPalindrome(word) {
  // Insert code here;
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2))
  let end = word.substring(len - Math.floor(len/2))

  let flip = end.split('').reverse().join('')
  return(start === flip)
}

// Do not edit this line;
module.exports = isPalindrome;