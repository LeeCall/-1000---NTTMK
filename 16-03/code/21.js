function tinhTongUocSo(n) {
    var temp = n / 2,
    a = [];
    for (var i = 1; i <= temp; i++) {
        if (n % i === 0) a.push(i);
    }
    return a.reduce((a, b) => a + b);
}
console.log(tinhTongUocSo(15));