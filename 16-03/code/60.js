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