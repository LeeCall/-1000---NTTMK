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