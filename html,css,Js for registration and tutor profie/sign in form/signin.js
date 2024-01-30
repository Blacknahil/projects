const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

emailInput.addEventListener("input", () => {
    if (emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity("");
    } else {
        emailInput.setCustomValidity("Please enter a valid email address.");
    }
    });

    passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
        passwordInput.setCustomValidity("Password must be at least 8 characters long.");
    } else {
        passwordInput.setCustomValidity("");
    }
});
