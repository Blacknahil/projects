document.addEventListener('DOMContentLoaded', () => {
    // Fetch posts from the API
    fetchPosts();
});

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
