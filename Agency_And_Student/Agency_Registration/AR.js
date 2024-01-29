const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const phoneNumberInput = document.getElementById("phone-number");
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

emailInput.addEventListener("input", () => {
    if (emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity("");
    } else {
        emailInput.setCustomValidity("Please enter a valid email address.");
    }
    });

    nameInput.addEventListener("input", () => {
    if (nameInput.value.length < 3) {
        nameInput.setCustomValidity("Name must be at least 3 characters long.");
    } else {
        nameInput.setCustomValidity("");
    }

    phoneNumberInput.addEventListener("input", () => {
        phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, "");
        if (phoneNumberInput.value.length !== 10) {
            phoneNumberInput.setCustomValidity("Phone number must be 10 digits long.");
        } else {
            phoneNumberInput.setCustomValidity("");
        }
    });
});



const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".registration-form");

submitButton.addEventListener("click", (event) => {
    if (!form.reportValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
    } else {
        alert("Registration was successful!");
    }
});


