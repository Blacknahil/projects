const id=localStorage.getItem('id');
document.addEventListener('DOMContentLoaded', () => {


    fetch(`http://localhost:5501/user/view/${id}`, {
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



        document.querySelector('.profile-card-header .name').innerHTML = user.username;

    // bio
        if (bio){
          document.querySelector('.bio-div .short-bio').innerHTML = bio;
          console.log(bio);
        }
        else{
            document.querySelector('.bio-div').style.display="none";
        }

// qualification
        if (qualification){
          document.querySelector('.qualification').innerHTML = qualification;
        }
        else{
            document.querySelector('.qualification-div').style.display="none";
        }

// address
        if (address){
            document.querySelector('.address').innerHTML = address;
          }
          else{
              document.querySelector('.address-div').style.display="none";
          }
//university
          if (university){
            document.querySelector('.university').innerHTML = qualification;
          }
          else{
              document.querySelector('.university-div').style.display="none";
          }
// avialabilty
        if(availability){
          container=document.querySelector('.availability-div');
          availability.forEach(item=>{
            const p=document.createElement('p')
            p.textContent=item;
            container.appendChild(item);
          })

        }
        else{
            document.querySelector('.availability-div').style.display='none';
        }
//volunterr
        if (volunteerStatus){
            document.querySelector('.volunteer').textContent = volunteerStatus;
          }
          else{
              document.querySelector('.volunteer-div').style.display="none";
          }
//gender
          if (gender){
            document.querySelector('.gender').innerHTML = gender;
          }
          else{
              document.querySelector('.gender-div').style.display="none";
          }
//price
          if (paymentRange){
            document.querySelector('.price').innerHTML = paymentRange;
          }
          else{
              document.querySelector('.price-div').style.display="none";
          }
// contact
          if (contactInformation){
            document.querySelector('.contact').innerHTML = contactInformation;
          }
          else{
              document.querySelector('.contact-div').style.display="none";
          }
// Experince 
          if (experience){
            document.querySelector('.experience').innerHTML = experience;
          }
          else{
              document.querySelector('.experience-div').style.display="none";
          }

//subjects
          if (subjectsOffered){
            const container = document.querySelector('.subjects-div');
            subjects.forEach(subject => {
                const p = document.createElement('p');
                p.textContent = subject;
                p.className = 'subject'; // Add class to the paragraph
                container.appendChild(p);
            });
            }
          else{
              document.querySelector('.subjects-div').style.display="none";
          }

          if(fieldOfMentorship){
            const container = document.querySelector('.fields-div');
            fieldOfMentorship.forEach(field => {
                const p = document.createElement('p');
                p.textContent = field;
                p.className = 'field';
                container.appendChild(p);
            })
          }

          else{
            document.querySelector(".fields-div").style.display='none';
          }
// 
//

//



  
      });

});

// });
fetchRating();
displayReviews();
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

    

    // Add other fields as needed

//     return card;
// }

function fetchRating(){
    fetch("http://localhost:5501/review/rating").then((response)=>(response.json()).then((json)=> displayRating(json)))
}

function displayRating(rating) {
    const card = document.getElementById('rating')
    card.innerHTML= rating;
}
function displayReviews(){
    fetch("http://localhost:5501/review/reviews").then((response)=>response.json()).then((json)=> renderReviews(json));
}

function renderReviews(reviews){
    for (i of reviews){
        const card = document.querySelector(".comment");
        const clone = card.cloneNode(true);
        clone.style.display = "block";
        document.querySelector(".rating-section")?.appendChild(clone);
        // clone.querySelector(".rating").innerHTML = i.rating;
        clone.querySelector("#comments").innerHTML = i.comment;
    };

}
 