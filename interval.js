console.log("one");
setTimeout(()=>{
    console.log("two");
},2000);
console.log("three");

setInterval(()=>{
    console.log("hello");
},3000);




let intervalId = setInterval(() => {
  console.log("Running...");
}, 50);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped!");
}, 10000);