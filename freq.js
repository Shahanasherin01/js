let a = "boost is the boost secret of my boosted boost";
let arr = a.split(" ");   
let count = {};           


for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (count[word]) {
        count[word] += 1;
    } else {
        count[word] = 1;
    }
}

let maxWord = "";
let maxCount = 0;

for (let word in count) {
    if (count[word] > maxCount) {
        maxCount = count[word];
        maxWord = word;
    }
}

console.log("Most frequent word: " + maxWord);
console.log("It appears " + maxCount + " times.");
