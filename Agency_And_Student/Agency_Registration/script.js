const id = localStorage.getItem('id');
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.submitbtn').addEventListener('click',function(event){
        event.preventDefault()
        const name=document.querySelector('.name').value;
        const email=document.querySelector('#email').value;
        // const password=document.querySelector('#password').value;
        const phone=document.querySelector('#phone').value;
        const bio=document.querySelector('#bio').value;
        const address= document.querySelector('#address').value;
        // const license=document.querySelector('#myFile').files[0];
        // const logoFile = document.querySelector('#logoFile').files[0];

        const formData={
            username:name,
            email,
            // password,
            phone,
            bio,
            address,
            // license,
            // logoFile
        }

        try {
            console.log(formData);
            fetch(`http://localhost:4078/user/${id}`,{
                method:'PUT',
                body:JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                alert('Updated Successfully');
            })
            .catch(error=>{
                console.error('Error:',error);
            });
        } catch (error) {
            console.error('Error:',error);
        }
    });
})