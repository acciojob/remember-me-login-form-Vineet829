let btn = document.querySelector("#submit");
let exist = document.querySelector("#existing");
let check = document.querySelector("#checkbox");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (check.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    alert("Logged in as " + username.value);
    updateUserDisplay();
});

const updateUserDisplay = () => {
    if (localStorage.getItem("username")) {
        exist.style.display = "block";
    } else {
        exist.style.display = "none";
    }
};

updateUserDisplay();

exist.addEventListener("click", (e) => {
    e.preventDefault();
    const existingUsername = localStorage.getItem("username");
    if (existingUsername) {
        alert("Logged in as " + existingUsername);
    }
});

