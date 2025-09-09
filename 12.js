let row=5;
let line="";
for (let i = 1; i <= row; i++) {
    for (let j = row; j >= i; j--) {
            line += " ";
             
    }

    for(k=i;k>=1;k--){

    line +=k;
}
 for( let z=2;z<=i;z++){
    line+=z;
 }
line+="\n";
}
console.log(line);  