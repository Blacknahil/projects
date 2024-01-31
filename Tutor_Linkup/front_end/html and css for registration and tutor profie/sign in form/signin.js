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

    const response = await fetch('http://localhost:4078/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const result = await response.json();
    console.log(result); // Log the response from the server

    const errorMessage = document.getElementById('error-message');

    if (result.token) {
        // Store the token in a cookie with a one-hour expiration
        document.cookie = `authToken=${result.token}; expires=${new Date(Date.now() + 60 * 60 * 1000)}; path=/`;

        // Redirect or handle other scenarios
        errorMessage.textContent = ''; // Clear any previous error messages
    } else if (result.message && result.message === 'Invalid email or password') {
        // Display an error message in red
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.color = 'red';
    } else {
        // Handle other scenarios or navigate to a success page
        errorMessage.textContent = ''; // Clear any previous error messages
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        submitForm(); // Call the submitForm function here
    });
});
