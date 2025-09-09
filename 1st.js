let n = 5;
let line = "";

for (let i = 1; i <= n; i++) {
    for (let k = 1; k < i; k++) {
            line += " ";
             
    }
    for(j=1;j<=n;j++){

    line += "*";
}
line+="\n";
}
console.log(line);  
  