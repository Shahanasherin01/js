let arr = [];
let sum = 0;


function perfect(n) {

    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }

    for (let j = 0; j <= arr.length - 1; j++) {
        sum = sum + arr[j];
    }
    if (sum == n) {
        console.log('perfect');

    }
    else {
        console.log('not perfect');

    }
}
perfect(28);