// // function checkEvenOdd(){
// //   let num = prompt("Enter Number")
// //   if(num % 2 === 0){
// //     return "Even";
// //   }else{
// //     return "Odd"
// //   }

// // }
// // let user = alert(checkEvenOdd())
// // console.log(user)

// // function findLargest() {
// //   // Return the largest among a, b, and c

// //   let a = prompt("Enter Fisrt num")
// //   let b = prompt("Enter Second num")
// //   let c = prompt("Enter Third num")

// //   if(a>=b && a>=c){
// //     return `The Largest number is ${a}`
// //   }else if(b>=c && b>=a){
// //     return `The Largest number is ${b}`
// //   }else{
// //     return `The Largest number is ${c}`
// //   }
// // }
// // let result = alert(findLargest())
// // console.log(result)
// // function checkVotingEligibility() {
// //   // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
// //   let age = prompt("Enter Your Age : ")
// //   if(age >= 18){
// //     return "Eligible"
// //   }else{
// //     return "Not Eligible"
// //   }
// // }
// // let result = alert(checkVotingEligibility())
// // console.log(result)

// //   function calculateGrade() {
// //     // Return grade based on the marks
// //     let marks = prompt("Enter Your Marks")
// //     if(marks >= 90){
// //       return "Grade A"
// //     }else if(marks >= 80 && marks < 89){
// //       return "Grade B"
// //     }else if(marks >= 70 && marks < 79){
// //       return "Grade C"
// //     }else if(marks >= 60 && marks < 69){
// //       return "Grade D"
// //     }else{
// //       return "Grade F"
// //     }

// //   }
// // let resulte = alert(calculateGrade())
// // console.log(result)


// // function isLeapYear() {
// //   // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"

// //   let year = prompt("Enter a Year : ")

// // if((year%4 === 0 && year/100 !== 0 ) || year%400 === 0){
// //   return `Leap Year = ${year}`
// // }else{
// //   return `Not a Leap Year = ${year}`
// // }
// // }

// // let result = alert(isLeapYear())
// // console.log(isLeapYear)

// // function trafficLightAction(color) {
// //   // Return "Stop", "Slow Down", or "Go" based on the traffic light color

// //   if (color === "Red") {
// //     return "Stop"
// //   } else if (color === "Yellow") {
// //     return "Slow Down"
// //   }else if (color === "Green"){
// //     return "Go"
// //   }else{
// //     return "invalid Color"
// //   }
// // }
// // console.log(trafficLightAction("Red"))


// // function getDayName() {
// //   let dayName;
// //   let dayNumber = prompt("Enter a Number under 1 - 7")
// //   switch (dayNumber) {
// //     case "1":
// //       dayName = "Monday";
// //       break;
// //     case "2":
// //       dayName = "Tuesday";
// //       break;
// //     case "3":
// //       dayName = "Wednesday";
// //       break;
// //     case "4":
// //       dayName = "Thursday";
// //       break;
// //     case "5":
// //       dayName = "Friday";
// //       break;
// //     case "6":
// //       dayName = "Saturday";
// //       break;
// //     case "7":
// //       dayName = "Sunday";
// //       break;
// //     default:
// //       dayName = "Invalid day";
// //   }
// //   return dayName;
// // }
// // let result = alert(getDayName())
// // console.log(result)



// // function checkNumberType() {
// //   // Return "Positive", "Negative", or "Zero" based on the input number
// //   let num = prompt("Enter Number : ")

// //   if(num > 0 ){
// //     return "Positive"
// //   }else if(num < 0){
// //     return "Negative"
// //   }else if(num == 0){
// //     return "Number Is Zero"
// //   }else{
// //     return "Not a Number"
// //   }
// // }

// // let result = alert(checkNumberType())
// // console.log(result)


// function calculator() {
//   let num1 = Number(prompt("Enter first number:"));
//   let num2 = Number(prompt("Enter second number:"));
//   let operator = prompt("Enter operator (+, -, *, /):");
//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;

//     case '-':
//       result = num1 - num2;
//       break;

//     case '*':
//       result = num1 * num2;
//       break;

//     case '/':
//       if (num2 === 0) {
//         alert("Cannot divide by zero");
//         return;
//       }
//       result = num1 / num2;
//       break;

//     default:
//       alert("Invalid operator");
//       return;
//   }

// }

// let resulte = alert(calculator());
// console.log(result)
