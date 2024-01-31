
var postButton = document.querySelector('.post-button');

postButton.addEventListener('click', function() {
  var inputText = document.querySelector('.post-section input[type="text"]');
  var inputValue = inputText.value;
  var postContainer = document.createElement('div');
  postContainer.textContent = inputValue;
  document.querySelector('.post-section').appendChild(postContainer);
  
  inputText.value = "";
});

const viewProfileButton = document.querySelector('.profile-view-button');

viewProfileButton.addEventListener('click', () => {
  window.location.href = '../Student/student_profile.html';
});


var searchIcon = document.querySelector('.search-bar i.fa-search');
var searchInput = document.querySelector('.search-bar input[type="text"]');

searchIcon.addEventListener('click', function() {
  var searchText = searchInput.value;
  console.log("Search icon clicked with input text:", searchText);
  // Add your desired actions here

  // Clear the search input field
  searchInput.value = "";
});