const postBtn = document.querySelector('#post-btn');
const postInput = document.querySelector('#post-input');

postBtn.addEventListener('click', () => {
    const postText = postInput.value;
    console.log(postText);

    if (postText.trim() !== '') {
        fetch('http://localhost:5501/posts/newPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: postText })

            // body: JSON.stringify({ description: postText }),
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error posting the message');
            }
            // console.log(response.body);
            return response.json();
            // console.log(response.body);

        })
        .then(data => {
            postInput.value = '';
            fetchAndRenderPosts();
        })
        .catch(error => {
            console.error('An unexpected error occurred:', error);
        });
    }
});



/////version one that worked
// async function fetchAndRenderPosts() {
//   try {
//       const response = await fetch('http://localhost:5501/create-post');
//       const data = await response.json();
//       const posts = data.posts

//       if (response.ok) {
//           const postsContainer = document.querySelector('.post-content');
//           postsContainer.innerHTML = '';

//           posts.forEach(post => {
//               const card = document.createElement('div');
//               card.classList.add('post-card');

//               const postProperties = ['description'];

//               postProperties.forEach(property => {
//                   const element = document.createElement('p');
//                   element.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${post[property]}`;
//                   card.appendChild(element);
//               });

//               postsContainer.appendChild(card);
//           });
//       } else {
//           console.error(data.error || 'Error fetching posts');
//       }
//   } catch (error) {
//       console.error('An unexpected error occurred:', error);
//   }
// }


async function fetchAndRenderPosts() {
  try {
      const response = await fetch('http://localhost:5501/create-post');
      const data = await response.json();
      const posts = data.posts;

      if (response.ok) {
          const postsContainer = document.querySelector('.post-content');
          postsContainer.innerHTML = '';

          posts.forEach(post => {
              const postCard = document.createElement('div');
              postCard.classList.add('post-card');

              const postProperties = ['description'];

              postProperties.forEach(property => {
                  const element = document.createElement('p');
                  // element.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${post[property]}`;
                  element.textContent = post[property];

                  postCard.appendChild(element);
              });

              postsContainer.appendChild(postCard);
          });
      } else {
          console.error(data.error || 'Error fetching posts');
      }
  } catch (error) {
      console.error('An unexpected error occurred:', error);
  }
}

fetchAndRenderPosts();



//// searchhh 1

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', async () => {
  const searchTerm = searchInput.value;
  console.log(searchTerm)

  if (!searchTerm) {
    return;
  }

  try {
    const response = await fetch(`http://localhost:5501/search/finduser?term=${searchTerm}`);
    const data = await response.json();
    console.log(response);

    if (data.users) {
      displayUsers(data.users);
    } else if (data.posts) {
      displayPosts(data.posts);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
});

function displayUsers(users) {
  searchResults.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.username} (${user.email})`;
    searchResults.appendChild(li);
  });
}

function displayPosts(posts) {
  searchResults.innerHTML = '';
  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = `${post.description}`;
    searchResults.appendChild(li);
  });
}