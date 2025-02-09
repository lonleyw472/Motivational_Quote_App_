const quotes = {
    all: [
        // Add all 77 quotes in here
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "You must be the change you wish to see in the world. – Mahatma Gandhi",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "It always seems impossible until it's done. – Nelson Mandela",
        "The only impossible journey is the one you never begin. – Tony Robbins",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "The harder the battle, the sweeter the victory. – Les Brown",
        "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
        "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
        "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
        "The best way to predict the future is to create it. – Peter Drucker",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
        "Nothing is impossible. The word itself says 'I’m possible!' – Audrey Hepburn",
        "If you’re going through hell, keep going. – Winston Churchill",
        "Everything you’ve ever wanted is on the other side of fear. – George Addair",
        "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua J. Marine",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Act as if what you do makes a difference. It does. – William James",
        "Everything you can imagine is real. – Pablo Picasso",
        "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
        "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
        "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill",
        "Everything has beauty, but not everyone sees it. – Confucius",
        "The best revenge is massive success. – Frank Sinatra",
        "A winner is a dreamer who never gives up. – Nelson Mandela",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
        "The man who has confidence in himself gains the confidence of others. – Hasidic Proverb",
        "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
        "Do what you feel in your heart to be right – for you’ll be criticized anyway. – Eleanor Roosevelt",
        "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "Make each day your masterpiece. – John Wooden",
        "The only limits in life are the ones you make. – Les Brown",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "The best way out is always through. – Robert Frost",
        "Be yourself; everyone else is already taken. – Oscar Wilde",
        "We may encounter many defeats but we must not be defeated. – Maya Angelou",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "Don’t let the fear of losing be greater than the excitement of winning. – Robert Kiyosaki",
        "You have power over your mind – not outside events. Realize this, and you will find strength. – Marcus Aurelius",
        "Courage is resistance to fear, mastery of fear, not absence of fear. – Mark Twain",
        "Dream big and dare to fail. – Norman Vaughan",
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "Do what you love and the money will follow. – Marsha Sinetar",
        "The mind is everything. What you think you become. – Buddha",
        "Effort only fully releases its reward after a person refuses to quit. – Napoleon Hill",
        "Every strike brings me closer to the next home run. – Babe Ruth",
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. – Aristotle",
        "An unexamined life is not worth living. – Socrates",
        "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Dream big. Start small. Act now. – Robin Sharma",
        "A journey of a thousand miles begins with a single step. – Lao Tzu",
        "Work hard in silence, let success make the noise. – Frank Ocean"
    ],
    success: [
        // You can still keep other categories here if needed for specific filtering
        // Success-related quotes
    ],
    life: [],
    love: [],
    inspiration: []
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = `"${quotes[randomIndex]}"`;

    // Update the background based on the selected category
    const selectedCategory = document.getElementById('categorySelect').value;
    document.body.className = selectedCategory;  // Dynamically apply the class to the body
}

// Function to handle category change
function categoryChanged() {
    const selectedCategory = document.getElementById('categorySelect').value;
    document.body.className = selectedCategory;  // Apply the new class to the body
}

// Optional: Call newQuote when the page loads to show the first quote
window.onload = newQuote;



