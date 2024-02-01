const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

function validateInputs() {
    if (emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity("");
    } else {
        emailInput.setCustomValidity("Please enter a valid email address.");
    }

    if (passwordInput.value.length < 8) {
        passwordInput.setCustomValidity("Password must be at least 8 characters long.");
    } else {
        passwordInput.setCustomValidity("");
    }
}

emailInput.addEventListener("input", validateInputs);
passwordInput.addEventListener("input", validateInputs);

async function submitForm() {
    validateInputs(); // Call input validation before submitting

    const email = emailInput.value;
    const password = passwordInput.value;

    const response = await fetch(`http://localhost:4078/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const errorMessage = document.getElementById('error-message');
    if (response.ok) {
        const result = await response.json();
        document.cookie = `authToken=${result.token}; expires=${new Date(Date.now() + 60 * 60 * 1000)}; path=/`;
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        const role = result.user.role;
        if (role === 'tutor/mentor') {
            window.location.href = '../../src/tutor home page/index.html';
        } else if (role === 'parent/student') {

            window.location.href = '../../Agency_And_Student/Student_Home/Student_home.html';
        }
        else{
            window.location.href = '../../Agency_And_Student/Agency_Home/Agency_home.html';
        }
    } else {
        alert(response.status);
        console.log(response.statusText);
         // Display an error message in red
         ///Users/nahom/Documents/GitHub/projects/src/tutor home page/index.html

    }
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        submitForm(); // Call the submitForm function here
    });
});

