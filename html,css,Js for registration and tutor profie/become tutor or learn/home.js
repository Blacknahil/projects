document.addEventListener('DOMContentLoaded', function() {
    function handleClick(event) {
        event.preventDefault(); 
        const url = event.target.getAttribute('href'); 
        console.log('Redirecting to:', url); 
        window.location.href = url; 
    }

    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});
