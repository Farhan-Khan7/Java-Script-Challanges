// function checkEvenOdd(){
//   let num = prompt("Enter Number")
//   if(num % 2 === 0){
//     return "Even";
//   }else{
//     return "Odd"
//   }

// }

// let user = alert(checkEvenOdd())
// console.log(user)


function findLargest() {
  // Return the largest among a, b, and c

  let a = prompt("Enter Fisrt num")
  let b = prompt("Enter Second num")
  let c = prompt("Enter Third num")

  if(a>=b && a>=c){
    return `The Largest number is ${a}`
  }else if(b>=c && b>=a){
    return `The Largest number is ${b}`
  }else{
    return `The Largest number is ${c}`
  }
}
let result = alert(findLargest())
console.log(result)