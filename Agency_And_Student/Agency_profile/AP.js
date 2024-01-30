var searchIcon = document.querySelector('.search-bar i.fa-search');
var searchInput = document.querySelector('.search-bar input[type="text"]');

searchIcon.addEventListener('click', function() {
  var searchText = searchInput.value;
  console.log("Search icon clicked with input text:", searchText);
  // Add your desired actions here

  // Clear the search input field
  searchInput.value = "";
});


const viewProfileButton = document.querySelector('.profile-view-button');

viewProfileButton.addEventListener('click', () => {
  window.location.href = '../Student/student_profile.html';
});