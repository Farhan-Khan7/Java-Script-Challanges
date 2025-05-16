// function checkEvenOdd(num){
//   if(num % 2 == 0){
//     return "Even";
//   }else{
//     return "Odd"
//   }

// }
// console.log(checkEvenOdd(8))


function findLargest(a, b, c) {
  // Return the largest among a, b, and c

  if(a>=b && a>=c){
    return a
  }else if(b>=c && b>=a){
    return b
  }else{
    return c
  }
}
console.log(findLargest(8,5,6))