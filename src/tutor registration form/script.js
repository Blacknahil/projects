const user = JSON.parse(localStorage.getItem('user'));
const id=localStorage.getItem('id');
// document.addEventListener('DOMContentLoaded', function() {
//     fetch(`http://localhost:27017/user/${id}`)
//     .then(response => response.json())
//     .then(data => {
//         document.querySelector('input[name="name"]').value=data.useranme;
//         document.querySelector('input[name="email"]').value=data.email;
//         document.querySelector('input[name="address"]').value=data.address;
//         document.querySelector('input[name="gender"]').value=data.gender;
//         document.querySelector('input[name="phone"]').value=data.phone;
//         document.querySelector('#qualification').value=data.qualification;
//         document.querySelector('#price').value=data.price;
//         document.querySelector('#bio').value=data.bio;

//         const subjects = data.subjects;
//         subjects.array.forEach(subject => {
//             document.querySelector(`input[name="${subject}"]`).checked=true;
//         });

//         const fields = data.fields;
//         fields.forEach(field => {
//             document.querySelector(`input[name="${field}"]`).checked=true;
//         });




//     });
// });

// document.querySelectorAll('.day input[type="checkbox"]').forEach(checkbox=>{
//         checkbox.addEventListener('change',function(){
//             const timeSlots = this.parentNode.querySelector('.time_slots');
//             if (this.checked) {
//                 console.log(timeSlots);
//                 timeSlots.style.display='block';
//             }
//             else{
//                 timeSlots.style.display='none';
//                 const checkboxes=timeSlots.querySelectorAll('input[type="checkbox"]').forEach(checkbox=>{
//                 if (checkboxes.length>0){
//                     checkboxes.forEach(checkbox=>{
//                         checkbox.checked=false;
//                     })
//                 }
//             });
//         }
//         })
//     })




document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cancelbtn').addEventListener('click',function(){
        window.location.href="../../html,css,Js for registration and tutor profie/tutor profile/index.html";
    });
document.querySelector('.submitbtn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("submitted");
   

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const new_password = document.querySelector('input[name="new_password"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const contactInformation = document.querySelector('input[name="phone"]').value;
    const qualification = document.querySelector('select[id="#qualification"]').value;
    const subjects=Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(subject => subject.value);
    const fields= Array.from(document.querySelectorAll('input[name="field"]:checked')).map(field => field.value);
    const bio = document.querySelector('textarea[name="bio"]').value;
    const price = document.querySelector('#price').value;
    const volunteer = document.querySelector('select[name="volunteer"]').value;
    const availability ={}
    document.querySelectorAll('.day').forEach(day=>{
        const dayCheckbox=day.querySelector('input[type="radio"]');
        if (dayCheckbox.checked){
            const timeSlots=Array.from(day.querySelectorAll('.time_slots input[type="radio"]:checked')).map(checkbox=>checkbox.value);
            availability[dayCheckbox.value]=timeSlots;
        }
    })


    const formData={
        username:name,
        email,
        subjectsOffered:subjects,
        contactInformation,

        address,
        availability,
        paymentRange:price,
        fieldsOfMentorship:fields,
        gender,
        // new_password,
        contactInformation,
        bio,
        volunteer,
        qualification,

    }

    fetch(`http://localhost:4078/user/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then(response=>{
        if(response.ok){
            console.log('success');
            window.location.href="../../html,css,Js for registration and tutor profie/tutor profile/index.html";
        }
        else{
            console.log(response.statusText);
            throw new Error("Request Failed")
        }
    })
    .then(data=>{

    })
    .catch(error=>{
        console.log("Error:",error)
    })
});
});

