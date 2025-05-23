// function addGuest(guestList, newGuest) {
//     // Add the newGuest to guestList and return the updated list
//     guestList.push(newGuest)

//     return guestList
// }

// console.log(addGuest(["Anirudh","Mukul"]," Radhika"))

// function eatCandy(candyJar) {
//     // Remove the last candy from the jar and return the updated jar
//     candyJar.pop()
//     return candyJar;
// }
// console.log(eatCandy(["lolipop" , "Gum" , "Chocolate"]))

// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName)
    return queue;
}

console.log(addPuppy(["Tom","Jerry","Spike"],"Max"))