document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:4078/user/s')
    .then(response => response.json())
    .then(data => {
        document.querySelector('input[name="name"]').value=data.name;
        document.querySelector('input[name="email"]').value=data.email;

        document.querySelector('input[name="address"]').value=data.address;
        document.querySelector('input[name="gender"]').value=data.gender;
        document.querySelector('input[name="phone"]').value=data.phone;
        document.querySelector('#qualification').value=data.qualification;
        document.querySelector('input[name="university"]').value=data.university;
        document.querySelector('#price').value=data.price;
        document.querySelector('#bio').value=data.bio;

        const subjects = data.subjects;
        subjects.array.forEach(subject => {
            document.querySelector(`input[name="${subject}"]`).checked=true;
        });

        const fields = data.fields;
        fields.forEach(field => {
            document.querySelector(`input[name="${field}"]`).checked=true;
        });




    });
});






document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const subjects=Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(subject => subject.value);

    const feilds= Array.form(document.querySelectorAll('input[name="field"]:checked')).map(field => field.value);

    const formData={
        name,
        email,
        subjects,
        address,
    }

    fetch('http://localhost:4078/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
});