// Selects all elements that have the "fade-in" class
const items = document.querySelectorAll('.fade-in');

// Function that reveals elements when they come into view
function reveal() {

    // Loop through each fade-in element
    items.forEach(item => {

        // Get the distance of the element from the top of the viewport
        const elementTop = item.getBoundingClientRect().top;

        // Check if the element is within the visible screen area
        if (elementTop < window.innerHeight - 100) {
            // Add "show" class to trigger fade-in animation
            item.classList.add('show');
        }
    });
}

// Runs the reveal function whenever the user scrolls
window.addEventListener('scroll', reveal);

// Runs the reveal function once when the page loads
window.addEventListener('load', reveal);
