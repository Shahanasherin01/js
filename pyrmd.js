let row=5;
let line="";
for (let i = row; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
            line += " ";
             
    }

    for(k=i;k<=row;k++){

    line += " *";
}
line+="\n";
}
console.log(line);  