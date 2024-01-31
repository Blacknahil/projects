document.querySelector('#form').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const role=document.querySelector('input[name="user_type"]:checked').value;
    await submitUserIdentity(role);
});

const submitUserIdentity=async(role)=>{
    const response = await fetch('http://localhost:4078/user/identity',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            role:role
        })
    });
    if (response.ok){
        window.location.href=response.url;
    }
    else{
        console.error(response.status,response.statusText);
        console.log(response);
    }
}