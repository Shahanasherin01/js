// let row = 5;
// let line = "";
// for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= i; j++) {
//         line += " ";
//     }
//     for (let k = row; k >= i; k--) {
//         line += "*";
//     }
//     line += "\n";
// }
// console.log(line);


let row = 5;
let line = "";
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        line += " ";
    }
    for (let k = row; k >= i; k--) {
        line += "*";
    }
    line += "\n";
}
console.log(line);

