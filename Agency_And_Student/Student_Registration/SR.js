const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
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
        document.querySelector('#gender select').value = data.gender;
        document.querySelector('input[name="subject"]').value = data.subject;
        document.querySelector('input[name="grade"]').value = data.grade;
        document.querySelector('input[name="pay"]').value = data.pay;
        document.querySelector('input[name="bio"]').value = data.bio;
        document.querySelector('#special select').value = data.special;
        document.querySelector('input[name="desc"]').value = data.desc;
        document.querySelector('input[name="expect"]').value = data.expect;
        document.querySelector('input[name="gender_pref"]').value = data.gender_pref;
    });
});

const id = localStorage.getItem('id');
document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const grade = document.querySelector('input[name="grade"]').value;
    const pay = document.querySelector('input[name="pay"]').value;
    const bio = document.querySelector('input[name="bio"]').value;
    const special = document.querySelector('#special select').value;
    const desc = document.querySelector('input[name="desc"]').value;
    const expect = document.querySelector('input[name="expect"]').value;
    const gender_pref = document.querySelector('input[name="gender_pref"]').value;

    const formData = {
        name,
        email,
        address,
        subject,
        grade,
        pay,
        bio,
        special,
        desc,
        expect,
        gender_pref
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



// js code to retrive data from the database


document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('formData')) {
        const formData = JSON.parse(localStorage.getItem('formData'));
        document.querySelector('input[name="name"]').value = formData.name;
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('input[name="grade"]').value = formData.grade;
        document.querySelector('input[name="pay"]').value = formData.pay;
        document.querySelector('input[name="subject"]').value = formData.subject;
        document.querySelector('input[name="address"]').value = formData.address;
        document.querySelector('input[name="bio"]').value = formData.bio;
        document.querySelector('#gender select').value = formData.gender;
        document.querySelector('#special select').value = formData.special;
        document.querySelector('input[name="desc"]').value = formData.desc;
        document.querySelector('input[name="expect"]').value = formData.expect;
        document.querySelector('input[name="gender_pref"]').value = formData.gender_pref;
    }
    document.querySelector('.registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            grade: document.querySelector('input[name="grade"]').value,
            pay: document.querySelector('input[name="pay"]').value,
            subject: document.querySelector('input[name="subject"]').value,
            address: document.querySelector('input[name="address"]').value,
            bio: document.querySelector('input[name="bio"]').value,
            gender: document.querySelector('#gender select').value,
            special: document.querySelector('#special select').value,
            desc: document.querySelector('input[name="desc"]').value,
            expect: document.querySelector('input[name="expect"]').value,
            gender_pref: document.querySelector('input[name="gender_pref"]').value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        this.submit();
    });
});s