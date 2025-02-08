const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Dream bigger. Do bigger.",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Everything you can imagine is real. – Pablo Picasso",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Dream it. Believe it. Build it.",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Everything you’ve ever wanted is on the other side of fear.",
    "The best revenge is massive success. – Frank Sinatra",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Sometimes the hardest part isn’t letting go but learning to start over.",
    "If you’re going through hell, keep going. – Winston Churchill",
    "Keep your head up. Keep your heart strong. – Ben Howard",
    "You only fail when you stop trying.",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Nothing is impossible. The word itself says “I’m possible!” – Audrey Hepburn",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t wait for the perfect moment. Take the moment and make it perfect.",
    "When you feel like quitting, remember why you started.",
    "Do something today that your future self will thank you for.",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua J. Marine",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Act as if what you do makes a difference. It does. – William James",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer"
];

// Function to display a new quote
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = `"${quotes[randomIndex]}"`;
}

// Show a quote when the page loads
window.onload = newQuote;


