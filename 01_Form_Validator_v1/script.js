const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check email is valid
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

// Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value == "") {
        showError(username, "Username is required");
        console.log("Username missing");
    } else {
        showSuccess(username);
    }

    if (email.value == "") {
        showError(email, "Email is required");
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter valid email address");
    } else {
        showSuccess(email);
    }

    if (password.value == "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (password2.value == "") {
        showError(password2, "Confirm Password is required");
    } else if (password.value != password2.value) {
        showError(password2, "Password and Confirm Password does not match");
    } else {
        showSuccess(password2);
    }
});
