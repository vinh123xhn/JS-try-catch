function chiacho0() {

var a = prompt("nhập một số vào",'');
var c = a/0;
try {
    console.log(a + "chia hết cho c" + c)
}
catch (e) {
    console.log("error:   " + e.message);
}
}