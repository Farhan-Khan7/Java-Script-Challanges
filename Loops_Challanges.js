function distributeGifts(totalGifts, friends) {
  // write your code here
  let distribute_gifts = 0;

  for(let i=0; i<friends; i++){
    if(totalGifts>0){
    distribute_gifts++ 
    totalGifts--;
    }
  }
  return distribute_gifts;
}
console.log(distributeGifts(10 , 5))

function countApples(apples) {

    let i = 0
    for(let i = 0; i<= apples; i++){
        
    }
    
 
}
console.log(countApples(3))


function countBoxes(totalBars, barsPerBox) {
    let boxes = 0;
    while(totalBars >= barsPerBox){
        boxes++;
        totalBars -= barsPerBox
    }

    return boxes;
}

console.log(countBoxes(17 , 5))


function totalWater(waterAmounts) {
  
    let calculateWater = 0;

    for(let i=0; i<waterAmounts.length; i++){
        calculateWater += waterAmounts[i]
    }
    return calculateWater;
}

console.log(totalWater([1,2,3,4]))

function countSteps(targetSteps) {
    let steps = 0;

    while(steps < targetSteps){
        steps++
    }
    return steps;
}

console.log(countSteps(15))

function workingDays(days) {
  // your code here
    let count = 0;
    for(let i=0; i<days.length; i++){
        if(days[i] == "sunday" || days[i] == "saturday"){
            console.log("Not Working days")
            continue;
        }else{
            count++
        }
    }
    return count;
}
console.log(workingDays(["monday" , "saturday" , "sunday"]))

function totalStars(starLevels) {
    let count_stars = 0;

    for(let i=0; i<starLevels.length; i++){
        for(let j=0; j<=i; j++){
            count_stars++
        }
    }
    return count_stars;
}

console.log(totalStars([["*","*","*"],["*","*"]]))
function totalStars(starLevels) {
    let count_stars = 0;

    for (let i = 0; i < starLevels.length; i++) {
        count_stars += starLevels[i].length;
    }

    return count_stars;
}

console.log(totalStars([["*","*","*"]])); // Output: 5


function totalPrice(prices) {

    let total_cost = 0;

    for(let i=0; i<prices.length; i++){
        total_cost += prices[i];
    }
    return total_cost;

}

console.log(totalPrice([5,10,15]))

function invertedMountain(n) {
    let pattern = '';

    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        pattern += '\n'; // Move to next line
    }

    return pattern;
}

console.log(invertedMountain(4));
