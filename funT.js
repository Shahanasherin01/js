// setTimeout(()=>{
// console.log('one');
// },1000);

// setTimeout(()=>{
// console.log('two');
// },2000);


// setTimeout(()=>{
// console.log('three');
// },3000);

// setTimeout(()=>{
// console.log('Go');
// },4000);


// worked without loop
// let intervalId = setInterval(() => {
//   console.log("hii gooys");
// }, 1000);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("");
// }, 5000);

// using loop

// for(i=1;i<=5;i++){
//     setTimeout(() => {
//         console.log('mern');

//     }, i*1000);
// }


function no(a, b) {
    try {
        if (isNaN(a) || isNaN(b)) {

            throw new Error("invalid input");
        }
    return b - a;
}
    catch (error) {
    console.log(error.message);
}
    }
    console.log(no(2,5));
    
