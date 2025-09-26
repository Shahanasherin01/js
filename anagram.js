let a = "listen";
let b = "silent";

if (a.length !== b.length) {
    console.log("Not an Anagram");
} else {
    let a1 = a.split("");
    let a2 = b.split("");
    for (let i = 0; i < a1.length; i++) {
        for (let j = i + 1; j < a1.length; j++) {
            if (a1[i] > a1[j]) {
                let temp = a1[i];
                a1[i] = a1[j];
                a1[j] = temp;
            }
            if (a2[i] > a2[j]) {
                let temp = a2[i];
                a2[i] = a2[j];
                a2[j] = temp;
            }
        }
    }

    let sorted1 = a1.join("");
    let sorted2 = a2.join("");

    if (sorted1 === sorted2) {
        console.log("its an Anagram");
    } else {
        console.log("Not an Anagram");
    }
}
