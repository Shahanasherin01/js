let row=5;
let line="";
for(let i=1;i<=5;i++){
    for( let j=0;j<=i;j++){
        line+=" ";
    }
    for(let k=row;k>=i;k--){
         if( i==1    || k==i || k==row){
        line+=" *";
    }
    else{
        line+="  ";
    }
}
   
    line+="\n";
}
console.log(line);  

