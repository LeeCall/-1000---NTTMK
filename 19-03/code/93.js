function checkSNT(n) {
    if (n < 2) return false;
    for (var i = 2, temp = Math.sqrt(n); i <= temp; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(checkSNT(12476127498167)); // false
