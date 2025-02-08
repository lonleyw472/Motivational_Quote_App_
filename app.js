// Fetch random quote from Quotable API
async function fetchQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    document.getElementById('quote').textContent = `${data.content} – ${data.author}`;
}

// Call the function when the page loads
fetchQuote();

// Call fetchQuote function on button click to get a new quote
function newQuote() {
    fetchQuote();
}
// Event listener for the button to load a new quote
document.querySelector("button").addEventListener("click", fetchQuote);
