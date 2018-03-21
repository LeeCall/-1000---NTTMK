function checkSNT(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) 
        if (n % i === 0) return false;
    return true;
}
function lietKe(n, a = []) {
    if (n === 2) return a.push(2);
    for (var i = 3; i < n; i += 3) {
        if (checkSNT(i)) a.push(i);
    }
    return a;
}
console.log(lietKe(67));