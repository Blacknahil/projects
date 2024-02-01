document.addEventListener('DOMContentLoaded', () => {
    // Fetch posts from the API
    fetchPosts();
});
fetchRating();
displayReviews();
async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:4078/create-post');
        const data = await response.json();

        if (response.ok) {
            displayPosts(data.posts);
        } else {
            console.error(data.error || 'Error fetching posts');
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.querySelector('.posts-container');

    // Clear existing posts
    postsContainer.innerHTML = '';

    // Iterate through the posts and create cards
    posts.forEach(post => {
        const card = createCard(post);
        postsContainer.appendChild(card);
    });
}

function createCard(post) {
    const card = document.createElement('div');
    card.classList.add('post-card');

    const postProperties = ['description', 'fieldOfMentorship', 'subjectsOffered', 'duration', 'paymentRate', 'genderPreference', 'timePreference', 'location'];

postProperties.forEach(property => {
    const element = document.createElement('p');
    element.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${post[property]}`;
    card.appendChild(element);
});

    

    // Add other fields as needed

    return card;
}

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
 