// color of all page
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--maincolor", mainColor);
}


let colorLi = document.querySelectorAll(".swicher li");

colorLi.forEach( (ele) => {
    ele.addEventListener("click", function () {
        document.documentElement.style.setProperty("--maincolor", ele.dataset.color);
        localStorage.setItem("color_option",ele.dataset.color);
    });
});

// progress of input in form
                            // user name
let inputUser = document.querySelector(".input-user");
let progressUser = document.querySelector("form .progress-user");   
let maxlengthUser = inputUser.getAttribute("maxlength");

inputUser.oninput = function () {
    progressUser.style.width = `${(inputUser.value.length * 100) / maxlengthUser}%`;
    if (inputUser.value.length <= 8) {
        progressUser.style.backgroundColor = "#dc4a38";
    } else if (inputUser.value.length <= 15) {
        progressUser.style.backgroundColor = "#3b5998";
    } else {
        progressUser.style.backgroundColor = "var(--maincolor)";
    }
};
                            // Email
let inputEmail = document.querySelector(".input-email");
let progressEmail = document.querySelector(".progress-Email");
let maxlengthEmail = inputEmail.getAttribute("maxlength");

inputEmail.oninput = function() {
    progressEmail.style.width = `${(inputEmail.value.length * 100) / maxlengthEmail}%`;
    if (inputEmail.value.length <= 8) {
        progressEmail.style.backgroundColor = "#dc4a38";
    } else if (inputEmail.value.length <= 15) {
        progressEmail.style.backgroundColor = "#3b5998";
    } else {
        progressEmail.style.backgroundColor = "var(--maincolor)";
    }
};
                            // password
let inputPassword = document.querySelector(".input-password");
let progressPassword = document.querySelector(".progress-password");
let maxlengthPassword = inputPassword.getAttribute("maxlength");

inputPassword.oninput = function() {
    progressPassword.style.width = `${(inputPassword.value.length * 100) / maxlengthPassword}%`;
    if (inputPassword.value.length <= 5) {
        progressPassword.style.backgroundColor = "#dc4a38";
    } else if (inputPassword.value.length <= 10) {
        progressPassword.style.backgroundColor = "#3b5998";
    } else {
        progressPassword.style.backgroundColor = "var(--maincolor)";
    }
};
















