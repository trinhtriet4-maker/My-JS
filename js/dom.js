const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function () {

    // Đổi nội dung
    title.textContent = "Học DOM thật vui!";

    // Đổi màu chữ
    title.style.color = "blue";

    // Đổi màu nền
    title.style.backgroundColor = "yellow";

});
