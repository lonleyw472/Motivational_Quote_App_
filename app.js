// Function to fetch a new random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote: ", error);
        document.getElementById('quote').textContent = "Failed to load quote, please try again.";
    }
}

// Call the function to display a quote when the page loads
fetchQuote();

// Event listener for the button to load a new quote
document.querySelector("button").addEventListener("click", fetchQuote);

