const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
alert('searching')
});


document.getElementById('post-btn').addEventListener('click', function() {
    const postInput = document.getElementById('post-input');
    const postText = postInput.value.trim();
  
    if (postText) {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <p class="post-text">${postText}</p>
      `;
  
      const latestPosts = document.querySelector('.latest-posts');
      latestPosts.insertBefore(postElement, latestPosts.firstChild);
      postInput.value = '';
    }
  });


  // window.onload=function(){
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   console.log(user)
  //   document.querySelector('#primary-tutor .profile-name').innerHTML = user.username;
  //   if (user.bio){
  //     document.querySelector('#primary-tutor .short-bio').innerHTML = user.bio;
  //   }
  //   if(user.qualification){
  //     document.querySelector('#primary-tutor .profile-college').innerHTML = user.qualification;
  //   }
  //   if(user.address){
  //     document.querySelector('#primary-tutor .profile-address').innerHTML = user.address;
  //   }
  // }
  
const id=localStorage.getItem('id');
  document.addEventListener('DOMContentLoaded', function() {
    // send a request to the server to get the user details
    fetch(`http://localhost:4078/user/view/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  }).then(response => {
      // handle the response
      if (response.ok){
        return response.json();
      }
      else{
        throw new Error(response.statusText);
      }
    }).then(result=>{
      user=result.user;
      localStorage.setItem('user',JSON.stringify(user));

      document.querySelector('#primary-tutor .profile-name').innerHTML = user.username;
      if (user.bio){
        document.querySelector('#primary-tutor .short-bio').innerHTML = user.bio;
      }
      if(user.qualification){
        document.querySelector('#primary-tutor .profile-college').innerHTML = user.qualification;
      }
      if(user.address){
        document.querySelector('#primary-tutor .profile-address').innerHTML = user.address;
      }

    });
  }
  );



