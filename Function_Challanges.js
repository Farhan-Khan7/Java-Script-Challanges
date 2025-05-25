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

// table(2);

function AddString(str){
    let SumString = '';
    for(let i=0; i<str.length; i++){
        SumString += str[i];
    }
    return SumString;
}

console.log(AddString(["F","A","R","H","A","N"]))