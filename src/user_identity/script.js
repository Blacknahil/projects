// document.querySelector('#form').addEventListener('submit',async(event)=>{
//     event.preventDefault();
//     const role=document.querySelector('input[name="user_type"]:checked').value;
//     await submitUserIdentity(role);
// });

// const submitUserIdentity=async(role)=>{
//     const response = await fetch('http://localhost:4078/user/identity',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             role:role
//         })
//     });
//     if (response.ok){
//         window.location.href=response.url;
//     }
//     else{
//         console.error(response.status,response.statusText);
//         console.log(response);
//     }
// }

// approach two that is saving the role of the user in the local stroage and then using it in the next page
document.querySelector('#form').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const role=document.querySelector('input[name="user_type"]:checked').value;
    localStorage.setItem('role',role);
    window.location.href='../../html,css,Js for registration and tutor profie/sign up with email form/signup.html';
})