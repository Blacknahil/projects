const id=localStorage.getItem('id');
document.addEventListener('DOMContentLoaded', () => {


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
        const name=user.username;
        const bio=user.bio;
        const address=user.bio;
        const qualification=user.qualifications;
        const availability=user.availability;
        const university=user.university;
        const volunteerStatus=user.volunteerStatus;
        const gender=user.gender;
        const paymentRange=user.paymentRange;
        const contactInformation=user.contactInformation;
        const experience=user.experience;
        const subjectsOffered=user.subjectsOffered;
        const fieldOfMentorship=user.fieldOfMentorship;



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

});

// });
// fetchRating();
// displayReviews();
// async function fetchPosts() {
//     try {
//         const response = await fetch('http://localhost:27017/create-post');
//         const data = await response.json();

//         if (response.ok) {
//             displayPosts(data.posts);
//         } else {
//             console.error(data.error || 'Error fetching posts');
//         }
//     } catch (error) {
//         console.error('An unexpected error occurred:', error);
//     }
// }

// function displayPosts(posts) {
//     const postsContainer = document.querySelector('.posts-container');

//     // Clear existing posts
//     postsContainer.innerHTML = '';

//     // Iterate through the posts and create cards
//     posts.forEach(post => {
//         const card = createCard(post);
//         postsContainer.appendChild(card);
//     });
// }

// function createCard(post) {
//     const card = document.createElement('div');
//     card.classList.add('post-card');

//     const postProperties = ['description', 'fieldOfMentorship', 'subjectsOffered', 'duration', 'paymentRate', 'genderPreference', 'timePreference', 'location'];

// postProperties.forEach(property => {
//     const element = document.createElement('p');
//     element.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${post[property]}`;
//     card.appendChild(element);
// });

    

//     // Add other fields as needed

//     return card;
// }

// function fetchRating(){
//     fetch("http://localhost:5501/review/rating").then((response)=>(response.json()).then((json)=> displayRating(json)))
// }

// function displayRating(rating) {
//     const card = document.getElementById('rating')
//     card.innerHTML= rating;
// }
// function displayReviews(){
//     fetch("http://localhost:5501/review/reviews").then((response)=>response.json()).then((json)=> renderReviews(json));
// }

// function renderReviews(reviews){
//     for (i of reviews){
//         const card = document.querySelector(".comment");
//         const clone = card.cloneNode(true);
//         clone.style.display = "block";
//         document.querySelector(".rating-section")?.appendChild(clone);
//         // clone.querySelector(".rating").innerHTML = i.rating;
//         clone.querySelector("#comments").innerHTML = i.comment;
//     };

// }
 