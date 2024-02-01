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



document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:4078/user')
    .then(response => response.json())
    .then(data => {
        document.querySelector('input[name="name"]').value = data.name;
        document.querySelector('input[name="email"]').value = data.email;
        document.querySelector('input[name="address"]').value = data.address;
        document.querySelector('input[name="bio"]').value = data.bio;
        document.querySelector('#uploadLicense').value = data.uploadLicense;
        document.querySelector('#uploadLogo').value = data.uploadLogo;
    });
});

const id = localStorage.getItem('id');
document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const bio = document.querySelector('input[name="bio"]').value;
    const uploadLicense = document.querySelector('#uploadLicense').value;
    const uploadLogo = document.querySelector('#uploadLogo').value;
    


    const formData = {
        name,
        email,
        address,
        bio,
        uploadLicense,
        uploadLogo,
    };

    fetch('http://localhost:4078/user/$id', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Data submitted successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
    });
}); 



// js code to retrive data fromthe database to the forms



document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('formData')) {
        const formData = JSON.parse(localStorage.getItem('formData'));
        document.querySelector('input[name="name"]').value = formData.name;
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('input[name="address"]').value = formData.address;
        document.querySelector('input[name="bio"]').value = formData.bio;
        document.querySelector('#uploadLicense').value = formData.uploadLicense;
        document.querySelector('#uploadLogo').value = formData.uploadLogo;
    }
    document.querySelector('.registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            address: document.querySelector('input[name="address"]').value,
            bio: document.querySelector('input[name="bio"]').value,
            uploadLicense: document.querySelector('#uploadLicense').value,
            uploadLogo: document.querySelector('#uploadLogo').value,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        this.submit();
    });
});