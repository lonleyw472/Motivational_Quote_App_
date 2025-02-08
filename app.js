async function fetchQuote() {
    const quoteContainer = document.getElementById('quote');
    try {
        const response = await fetch('https://api.quotable.io/random');
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        // Wrap the quote in double quotes
        quoteContainer.textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote: ", error);
        quoteContainer.textContent = "Failed to load quote, please try again later.";
    }
}

// Call the function to display a quote when the page loads
document.addEventListener('DOMContentLoaded', fetchQuote);

// Event listener for the button to load a new quote
document.querySelector("button").addEventListener("click", fetchQuote);
