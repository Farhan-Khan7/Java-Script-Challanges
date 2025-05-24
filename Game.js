const max = prompt("Enter the maximum number");
const random_number = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guessing the number");

while (true) {
    if (guess == "quit") {
        console.log("You are QUIT now")
        break;
    }


    if (guess == random_number) {
        console.log("You are guessing right random Number ")
        break;
    } else if (random_number > guess) {
        guess = prompt("your number  is too small ! Try Again ")
    } else {
        guess = prompt("your number  is too large ! Try Again ")
    }
}