// Function to fetch and display a new quote
async function newQuote() {
    const quoteContainer = document.getElementById('quote');
    try {
        // Fetch a random quote from the Quotable API
        const response = await fetch('https://api.quotable.io/random');
        
        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();

        // Update the quote text on the webpage with double quotes
        quoteContainer.textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote: ", error);
        // Fallback in case of an error
        quoteContainer.textContent = "Failed to load quote, please try again later.";
    }
}

// Call the function to display a quote when the page loads
window.onload = newQuote;

// Event listener for the button to load a new quote
document.querySelector("button").addEventListener("click", newQuote);

