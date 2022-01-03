function titleCaseEdit(title) {
  // Insert code here;
  var word = title.split(" ");
  for (var i = 0; i < word.length; i++){
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
  }
  return word.join(" ")
}

// Do not edit this line;
module.exports = titleCaseEdit;