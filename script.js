// Get references to the button and paragraph elements
const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('text');

// Define a function that changes the text content of the paragraph
function changeText() {
    paragraph.textContent = 'The text has been changed!';
}

// Add an event listener to the button to call changeText when clicked
button.addEventListener('click', changeText);

// Handle the search form submission
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert('Search functionality not implemented. Search query: ' + query);
        // Here you can add code to handle the search query, e.g., sending it to a server.
    }
});
