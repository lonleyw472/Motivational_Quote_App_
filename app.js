// Array of quotes
const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi"
];

// Function to display a new quote
function newQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the quote text on the webpage, wrapping it in double quotes
    document.getElementById('quote').textContent = `"${quotes[randomIndex]}"`;
}

// Optional: Call newQuote when the page loads to show the first quote
window.onload = newQuote;


