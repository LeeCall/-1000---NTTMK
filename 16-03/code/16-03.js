// © 2018 leecode Copyright


// Bai 20
function timUoc(n) {
    a = [];
    var temp = n / 2;
   for (var i = 1; i <= temp; i++) {
        if (n % i === 0) a.push(i);
    }
    return a;
}
console.log(timUoc(42));


// Bai 21
function tinhTongUocSo(n) {
    var temp = n / 2,
    a = [];
    for (var i = 1; i <= temp; i++) {
        if (n % i === 0) a.push(i);
    }
    return a.reduce((a, b) => a + b);
}
console.log(tinhTongUocSo(15));


// Bai 29
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


// Bai 30
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


// Bai 44
function sum(n) {
    arr = n.toString().split("");
    return arr.reduce((a, b) => {
        return Number(a) + Number(b);
    });
}
console.log(sum(546516));


// Bai 59
function checkDoiXung(n) {
   arr = n.toString().split("");
   let temp = arr.length - 1;
   let flag = true;
   for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[temp--]) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(checkDoiXung(123456789)); // false
console.log(checkDoiXung(12221)); // true


// Bai 60
function tangDan(n) {
    arr = n.toString().split("");
    let flag = true;
    for (var i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > Number(arr[i + 1])) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(tangDan(134445889)); // true
console.log(tangDan(987561123456789)); // false
// Bai 61
// Giam dan thi giong tang dan nen thoi khoi lam ngen