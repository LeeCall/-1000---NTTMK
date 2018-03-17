function uocSoLeMax(n) {
    var temp = n / 2
    , max = -1;
    for (var i = 1; i <= temp; i++) {
        if (n % i === 0 && i >= max && i % 2 !== 0) 
            max = i;
    }
    return max;
}
console.log(uocSoLeMax(42));