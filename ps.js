let n = 4;
let line = "";

for (let i = 0; i < n; i++) {
    let num = 1;
    for (let j = 0; j < n - i - 1; j++) {
        line += " ";
    }
    for (let j = 0; j <= i; j++) {
        line += num + " ";
        num = num * (i - j) / (j + 1); 
    }
    line += "\n";
}

console.log(line);
