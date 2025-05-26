// function randomNumber() {
//     let Random = Math.floor(Math.random()*6)+1;
//     return Random;
// }
// console.log(randomNumber())

// function table(tbl) {
//     for(let i=1; i<=10; i++){
//         console.log(`${tbl} * ${i} = ${tbl*i}`);
//     }
// }

// table(14);

// function AddString(str){
//     let SumString = '';
//     for(let i=0; i<str.length; i++){
//         SumString += str[i];
//     }
//     return SumString;
// }

// console.log(AddString(["A","A","F","I","Y","A"]))

// function oddEvenTest(request , n) {
//     if(request == "odd"){
//         return function(n){
//             console.log(n%2 !== 0)
//         }
//     } else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0)
//         }
//     } else{
//         console.log("Wrong request")
//     }
// }

// console.log(oddEvenTest("odd" ,4))


// function getElement(array , num) {
//     let returnArray = [];

//     for(let i=0; i<array.length; i++){
//         if(array[i] > num){
//             returnArray += ` ${array[i]}`;
//         }
//     }
//     return returnArray;

// }
// console.log(getElement([1,2,3,4,5,6,7,8,9,10], 10))


// function getUniqueCharacter(str){
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         if(!result.includes(str[i])){
//             result += str[i]
//         }
//     }
//     return result;

// }
// console.log(getUniqueCharacter("aabbbcdefgggh"))


// function countVowels(str){
    
//     let vowels = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             vowels++;
//         }
//     }
//     return vowels
// }

// console.log(countVowels("abcdeghijklmnopqrstu"))