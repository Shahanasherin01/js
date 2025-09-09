let row=5;
let line=""

for(i=row;i>=1;i--){
    for(j=1;j<=i;j++){
        line +=j;
    }
    line+="\n";
}
console.log(line);  
