const quotes = {
    all: [
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
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "You must be the change you wish to see in the world. – Mahatma Gandhi",
        "The best way to predict the future is to create it. – Peter Drucker",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
        "Do what you feel in your heart to be right – for you’ll be criticized anyway. – Eleanor Roosevelt",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
        "The harder the battle, the sweeter the victory. – Les Brown",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
        "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
        "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill",
        "Do what you love and the money will follow. – Marsha Sinetar",
        "Everything you can imagine is real. – Pablo Picasso",
        "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "The best revenge is massive success. – Frank Sinatra",
        "A winner is a dreamer who never gives up. – Nelson Mandela",
        "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
        "Everything has beauty, but not everyone sees it. – Confucius",
        "If you’re going through hell, keep going. – Winston Churchill",
        "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua J. Marine",
        "Act as if what you do makes a difference. It does. – William James",
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "Don’t let yesterday take up too much of today. – Will Rogers"
    ],
    life: [
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
        "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
        "Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
        "Life isn’t about waiting for the storm to pass; it’s about learning to dance in the rain. – Unknown",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "Do what you love and the money will follow. – Marsha Sinetar",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne"
    ],
    love: [
        "Love is composed of a single soul inhabiting two bodies. – Aristotle",
        "To love and be loved is to feel the sun from both sides. – David Viscott",
        "Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day. – Unknown",
        "We are shaped and fashioned by what we love. – Johann Wolfgang von Goethe",
        "True love is not about perfection, it is about accepting each other’s imperfections. – Unknown",
        "Love is not about finding the perfect person, it is about seeing an imperfect person perfectly. – Unknown",
        "Love is all we have, the only way that each can help the other. – Euripides",
        "Love is a many-splendored thing. – Paul McCartney",
        "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love. – Gabriel García Márquez",
        "You don’t marry someone you can live with – you marry the person who you cannot live without. – Unknown",
        "Love isn’t something you find. Love is something that finds you. – Loretta Young",
        "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation. – Rabindranath Tagore"
    ],
    inspiration: [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "The only impossible journey is the one you never begin. – Tony Robbins",
        "Everything you’ve ever wanted is on the other side of fear. – George Addair",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Act as if what you do makes a difference. It does. – William James",
        "Everything you can imagine is real. – Pablo Picasso",
        "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
        "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
        "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill",
        "Everything has beauty, but not everyone sees it. – Confucius",
        "The best revenge is massive success. – Frank Sinatra",
        "A winner is a dreamer who never gives up. – Nelson Mandela",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe"
    ]
};


// Function to handle showing a random quote based on category
function newQuote() {
    const category = document.getElementById('category').value;
    let selectedQuotes = quotes[category];

    // Randomly select a quote
    const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
    const quoteText = selectedQuotes[randomIndex];
    
    // Change background color based on category
    document.body.className = category;  // Adds the corresponding class (success, life, etc.)

    // Display the quote
    document.getElementById('quote').textContent = `"${quoteText}"`;
}

// Optional: Call newQuote when the page loads to show the first quote
window.onload = newQuote;

// Example event listener to switch categories (you would attach this to buttons or a menu)
document.getElementById("allCategoryBtn").addEventListener("click", function() {
    changeCategory("all");
});
document.getElementById("successCategoryBtn").addEventListener("click", function() {
    changeCategory("success");
});
document.getElementById("lifeCategoryBtn").addEventListener("click", function() {
    changeCategory("life");
});
document.getElementById("loveCategoryBtn").addEventListener("click", function() {
    changeCategory("love");
});
document.getElementById("inspirationCategoryBtn").addEventListener("click", function() {
    changeCategory("inspiration");
});
