// 109.Viết chương trình in bảng cửu chương ra màn hình
function cuuChuong() {
    for (var i = 2; i <= 9; i++)  {
        console.log(`\t\t\t    --- Cuu chuong ${i} --- \n`);
        for (var j = 1; j <= 10; j++)
            console.log(`\t\t\t\t ${i} x ${j} = ${i * j} \n`);
    }
}
cuuChuong();