const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("content");

toggleBtn.addEventListener("click", function () {

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }

});


const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        message.textContent =
            "Vui lòng nhập đầy đủ thông tin!";

        message.style.color = "red";

    } else {

        message.textContent =
            "Gửi thông tin thành công!";

        message.style.color = "green";
    }

});
