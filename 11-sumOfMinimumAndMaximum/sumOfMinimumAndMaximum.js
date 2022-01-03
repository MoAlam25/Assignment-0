function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var x = 0;
  var y = nums[0];

  for(var i=0; i < nums.length; i++){
    if(nums [i] > x){
      x = nums [i];
    }
    if(nums [i] < y){
      y = nums [i];
    }
  }
  return x + y;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;