function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let prod = 1;
    for(const arg of args) prod *= arg;
  
    return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;