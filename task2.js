let message = "  Coding is FUN when you practice consistently!  ";

// let a=message.length;
let a = message.trim();
// let b=a.charAt(10);
// result=a.slice(10,13);
// result=a.substring(0,6)
// result=a.substr(23,8);
// result=a.replaceAll('FUN','enjoyable')
// result=a.replaceAll('o','O')
// result=a.split(" ")
// result=a.replaceAll(" ","-")
result = a.split(" ")
for (i = 0; i <= result.length-1; i++) {
    let str = result[i];
    str[0].toUpperCase();
    console.log(str);

    // if(result[a][0]==toUpperCase()){
    // result.toUpperCase();
}

console.log(result);
