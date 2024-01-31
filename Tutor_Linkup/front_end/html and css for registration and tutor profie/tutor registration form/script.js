document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization logic if needed
});

async function createPost() {
    const description = document.getElementById('description').value;
    const fieldOfMentorship = document.getElementById('fieldOfMentorship').value;
    const subjectsOffered = document.getElementById('subjectsOffered').value;
    // Retrieve other form fields as needed

    try {
        
        const response = await fetch('http://localhost:4078/posts/newPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description,
                fieldOfMentorship,
                subjectsOffered,
                // Include other fields in the request body
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Post created successfully!');
            // Redirect to the tutor profile page
            window.location.href = '../tutor profile/index.html';
        } else {
            console.error(data.message || 'Error creating post');
            alert('Error creating post. Please try again.');
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}
