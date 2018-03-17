function isPerfect(n) {
    var temp = n / 2
    , sum = 0;
    for (var i = 1; i <= temp; i++) {
        if ( n % i === 0) 
            sum += i;
    }
    return sum === n ? true : false;
}
console.log(isPerfect(8128));