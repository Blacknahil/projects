// const form = document.getElementById('review-form');

// const { render } = require("ejs");



//         form.addEventListener('submit', async (event) => {
//             event.preventDefault();
//             const content = document.getElementById('review').value;
//             try {
//                 const response = await fetch('http://localhost:5501/group/create', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify( { content })
//                 });
//                 if (!response.ok) {
//                     throw new Error(`Failed to submit review: ${response.statusText}`);
//                 }
//                 alert('Review submitted successfully');
//             } catch (error) {
//                 console.error('Failed to submit review:', error);
//             }
//         });



        // const form = document.getElementById('review-form');


// Assuming you have a form with an input field and a button

// /the working one so far

const form = document.querySelector('form');
const contentField = document.querySelector('#content');
const itemsField = document.querySelector('#items');
const submitButton = document.querySelector('button');

// Add an event listener to the form
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the input fields
  const content = contentField.value;
  const members = itemsField.value.split(',').map(item => item.trim());

  // Create an object to send as the request body
  const data = { content, members };

  // Send the request to the server
  try {
    const response = await fetch('http://localhost:5501/group/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    // Check if the request was successful
    if (response.ok) {
      console.log('Data saved successfully');
    } else {
      console.error('Failed to save data:', response.statusText);
    }
  } catch (error) {
    console.error('Failed to save data:', error);
  }
});

// copied from josh

// function displayReviews(){
//     fetch("http://localhost:5501/group/get").then((response)=>response.json()).then((json)=> renderReviews(json));
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



//   Send a GET request to the server to retrieve the saved data
//   fetch('http://localhost:5501/group/get')
//     .then(response => response.json())
//     .then(data => {
//       // Extract the content and items from the retrieved data
//       const groups = data.groups;
//     //   const {members} = data.members;
//       console.log(groups)

//       const studentsListElement = document.querySelector('.students-list');
//     groups.forEach(group => {
//       const content = group.content;
//       const members = group.members;

//       // Display the retrieved content on the page
//       const contentElement = document.querySelector('#description');
//       contentElement.textContent = content;

//       // Display the retrieved items on the page
//       const studentsListElement = document.querySelector('.students-list');
//       members.forEach(item => {
//         const studentCardElement = document.createElement('div');
//         studentCardElement.classList.add('student-card');

//         const studentImgElement = document.createElement('div');
//         studentImgElement.classList.add('student-img');

//         const studentImg = document.createElement('img');
//         studentImg.src = '../../Images/person1.png';
//         studentImg.alt = 'student';
//         studentImgElement.appendChild(studentImg);

//         const studentInfoElement = document.createElement('div');
//         studentInfoElement.classList.add('student-info');

//         const studentNameElement = document.createElement('h4');
//         studentNameElement.classList.add('student-name');
//         studentNameElement.textContent = item;
//         studentInfoElement.appendChild(studentNameElement);

//         studentCardElement.appendChild(studentImgElement);
//         studentCardElement.appendChild(studentInfoElement);
//         studentsListElement.appendChild(studentCardElement);
//       });
//     })
//     .catch(error => {
//       console.error('Failed to retrieve data:', error);
//     })

// })


///new one


  // Send a GET request to the server to retrieve the saved data
//   fetch('http://localhost:5501/group/get')
//     .then(response => response.json())
//     .then(data => {
//       // Extract the groups array from the retrieved data
//       const groups = data.groups;

//       // Display the retrieved groups and members on the page
//       const studentsListElement = document.querySelector('#students-list');
//       groups.forEach(group => {
//         const groupElement = document.createElement('div');
//         groupElement.classList.add('group');

//         const content = group.content;
//         const members = group.members;

//         // Display the retrieved content on the page
//         const contentElement = document.querySelector('#description');
//         contentElement.textContent = content;

//            // Display the retrieved members on the page
//            if (Array.isArray(members)) {
//             members.forEach(member => {
//               const memberElement = document.createElement('div');
//               memberElement.classList.add('student-info');
//               memberElement.innerHTML = `<h4 class="student-name">${member}</h4>`;
//               groupElement.appendChild(memberElement);
//             });
//           }
  
//           studentsListElement.appendChild(groupElement);
//         });
//       })
//       .catch(error => {
//         console.error('Failed to retrieve data:', error);
//       });




// Send a GET request to the server to retrieve the saved data
function renderGroups(){
fetch('http://localhost:5501/group/get')
.then(response => response.json())
.then(data => {
  // Extract the groups array from the retrieved data
  const groups = data.groups;

  // Display the retrieved groups and members on the page
  const studentsListElement = document.querySelector('#students-list');
  groups.forEach(group => {
    const groupElement = document.createElement('div');
    groupElement.classList.add('group');

    const content = group.content;
    const members = group.members;

    // Display the retrieved content on the page
    const contentElement = document.createElement('p');
    contentElement.classList.add('group-content');
    contentElement.textContent = content;
    groupElement.appendChild(contentElement);

    // Display the retrieved members on the page
    if (Array.isArray(members)) {
      const membersElement = document.createElement('div');
      members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('student-info');
        memberElement.innerHTML = `<h4 class="student-name">${member}</h4>`;
        membersElement.appendChild(memberElement);
      });
      groupElement.appendChild(membersElement);
    }

    studentsListElement.appendChild(groupElement);
  });
})
.catch(error => {
  console.error('Failed to retrieve data:', error);
});
}

const leaveBtn = document.querySelector('#leave-btn');
  leaveBtn.addEventListener('click', () => {
    window.location.href = '../tutor-home-page/index.html';
  });

renderGroups();
