// Fetch random quote from Quotable API
async function fetchQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    document.getElementById('quote').textContent = `${data.content} – ${data.author}`;
}catch (error) {
        console.error("Error fetching quote: ", error);
        document.getElementById('quote').textContent = "Failed to load quote, please try again.";

// Call the function when the page loads
fetchQuote();

// Call fetchQuote function on button click to get a new quote
function newQuote() {
    fetchQuote();
}
// Event listener for the button to load a new quote
document.querySelector("button").addEventListener("click", fetchQuote);
