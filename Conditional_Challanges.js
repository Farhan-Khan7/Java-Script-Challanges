// CHALLANGE 1 CONDITIONAL STATEMENT

// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if(num%2 == 0){
      return "Even";
    }else{
      return "Odd";
    }
  }
  console.log(checkEvenOdd({num : 4}));
  

//   CHALLANGE 2 CONDITIONL STATEMENT

// You just need to implement the findLargest function
function findLargest(a, b, c) {
// Return the largest among a, b, and c
if(a>=b && a>=c){
  return a;
}else if(b>=a && b>=c){
  return b;
}else{
  return c;
}
}
console.log(findLargest({"a":10,"b":20,"c":15}));

// CHALLANGE 3 CONDITIONAL STATEMENT

// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"

  if(age >= 18){
    return "Eligible";
  }else{
    return "Not Eligible";
  }

}
checkVotingEligibility({"age":20})
