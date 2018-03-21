// S(n) = 1 + 2 + 3 + ... + n

// De Quy
function sumRecursion(n) {
    if (n == 1) return 1;
    return sumRecursion(n - 1) + n;
}
// De Quy duoi
function sumTailRecursion(n, x = 1) {
    if (n == 1) return x;
    return sumTailRecursion(n - 1, x + n);
}
// Khu De Quy
function delRecursion(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) { sum += i; }
    return sum;
}
console.log(sumRecursion(15));
console.log(sumTailRecursion(15));
console.log(delRecursion(15));