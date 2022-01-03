function frequencyCounter(word) {
  // Insert code here;
  var x = {}

  for(var i = 0; i < word.length; i++){
    if(x[word[i]] != null) {
      x[word[i]]++
    }
    else {
      x[word[i]] = 1
    }

  }
    return x
}

// Do not edit this line;
module.exports = frequencyCounter;