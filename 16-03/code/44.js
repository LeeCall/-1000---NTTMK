function sum(n) {
    arr = n.toString().split("");
    return arr.reduce((a, b) => {
        return Number(a) + Number(b);
    });
}
console.log(sum(546516));