function timUoc(n) {
    a = [];
    var temp = n / 2;
   for (var i = 1; i <= temp; i++) {
        if (n % i === 0) a.push(i);
    }
    return a;
}
console.log(timUoc(42));