let row=5;
let line="";
for(let i=1;i<=row;i++){
    for(let j=1;j<=i;j++){
        line +=" *";
    }
    for(k=row-1;k>=i;k--){
        line +="    ";
    }
    for(let m=1;m<=i;m++){
        line +="* ";
    }
    line +="\n";
}
for(let     )
console.log(line);
