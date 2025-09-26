let str1 = "listen";
let str2 = "silen";

if (str1.length !== str2.length) {
    console.log("Not an Anagram ❌");
} else {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
            if (arr2[i] > arr2[j]) {
                let temp = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = temp;
            }
        }
    }

    let sorted1 = arr1.join("");
    let sorted2 = arr2.join("");

    if (sorted1 === sorted2) {
        console.log("Anagram ✅");
    } else {
        console.log("Not an Anagram ❌");
    }
}
