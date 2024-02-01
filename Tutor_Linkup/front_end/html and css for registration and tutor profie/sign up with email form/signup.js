const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
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

    nameInput.addEventListener("input", () => {
    if (nameInput.value.length < 3) {
        nameInput.setCustomValidity("Name must be at least 3 characters long.");
    } else {
        nameInput.setCustomValidity("");
    }
});



async function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5501/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: name,
            email,
            password,
            role: 'Tutor', // Specify the role based on your requirements
            address: '', // Add other fields as needed
        }),
    });

    const result = await response.json();
    console.log(result); // Log the response from the server

    // You can handle the response here and provide appropriate feedback to the user
    if (result.message && result.message === 'User with this email already exists') {
        // Display an error message in red
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Account already exists. Please log in.';
        errorMessage.style.color = 'red';
    } else {
        // Handle other scenarios or navigate to a success page
    }


}



