function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var union = new Set();

  for (const set of args){
    for (let x of set){
      union.add(x);
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;