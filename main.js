document.getElementById("plus").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum;
});
document.getElementById("delete").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum;
});
document.getElementById("multiply").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum;
});
document.getElementById("divide").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum;
});
document.getElementById("bmi").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / (num2 / 100 * num2 / 100);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum;
});

function fplus() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert("แสดงผลรวม : " + sum);
}
function fdelete() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    alert("แสดงผลรวม : " + sum);
}
function fmultiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    alert("แสดงผลรวม : " + sum);
}
function fdivide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    alert("แสดงผลรวม : " + sum);
}


const img = document.createElement("img");

img.src = "img/6439010068.jpg";

document.getElementById("Mydiv").appendChild(img);