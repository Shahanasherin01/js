function prime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log("not prime");
            break;
        } else {
            console.log('prime');
            break;
        }
    }
}

prime(10);