const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
alert('searching')
});


document.getElementById('post-button').addEventListener('click', function() {
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