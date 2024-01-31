
const id = localStorage.getItem('id'); 
document.addEventListener('DOMContentLoaded',function(){

document.querySelector('.submitbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const new_password = document.querySelector('input[name="new_password"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const subjects = document.querySelector('input[name="subjects"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const bio = document.querySelector('input[name="bio"]').value;

    const special = document.querySelector('#special select').value;
    const desc = document.querySelector('input[name="desc"]').value;
    const expect = document.querySelector('input[name="expect"]').value;
    const gender_pref = document.querySelector('input[name="gender_pref"]').value;
    const grade = document.querySelector('input[name="grade"]').value;

    const formData = {
        name,
        email,
        address,
        subjects,
        grade,
        price,
        bio,
        special,
        desc,
        expect,
        gender_pref,
        new_password,
        phone,

    };


    fetch`'http://localhost:4078/user/:${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    }
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Data submitted successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
    })});
});