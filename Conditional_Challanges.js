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
console.log(checkVotingEligibility({"age":20}));


// CHALLANGE 4 CONDITIONAL STATEMENT

// You just need to implement the calculateGrade function

function calculateGrade(marks) {
  // Return grade based on the marks
  if(marks >= 90){
    return "A"
  }else if(marks<90 && marks>=80){
    return "B"
  }else if(marks<80 && marks>=70){
    return "C"
  }else if(marks<70 && marks>=60){
    return "D"
  }else if(marks<60){
    return "F"
  }
}

console.log(calculateGrade({"marks":85}));

// CHALLANGE 5 CONDITIONAL STATEMENT

// You just need to implement the isLeapYear function
function isLeapYear(year) {
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"

  if( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return "Leap Year"
  }else{
    return "Not a Leap Year"
  }
}
console.log(isLeapYear({"year":1900}));

// CHALLANGE 6 CONDITIONAL STATEMENT

// You just need to implement the trafficLightAction function

function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch (color) {
        case "Red":
            return "Stop";
        case "Yellow":
            return "Slow Down";
        case "Green":
            return "Go";
        case "Blue":
            return "Invalid color";
    }

}
console.log(trafficLightAction({"color":"Red"}));


// CHALLANGE 7TH CONDITIONAL STATEMENT

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number

  switch(day){

    case 1 : return "Monday";
    
    case 2 : return "Tuesday";
    
    case 3 : return "Wednesday";
    
    case 4 : return "Thusday";
    
    case 5 : return "Friday";
    
    case 6 : return "Saturday";
    
    case 7 : return "Sunday";
    
    default: return "Invalid day";
  }
}

console.log(getDayOfWeek(5));


// CHALLANGE 8TH CONDITIONAL STATEMENT

// You just need to implement the checkNumberType function
function checkNumberType(num) {
  // Return "Positive", "Negative", or "Zero" based on the input number

  if(num > 0){
    return "Positive"
  }else if (num < 0){
    return "Negative"
  }else if(num === 0){
    return "Zero"
  }
}
console.log(checkEvenOdd(5))