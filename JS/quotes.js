const quotes = [
    {
        quote: "어려운 게 아니다. 익숙하지 않은 것이다.",
        author: "Unknown"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "if you can't explain it simply you don't understand it well enough",
        author: "Albert Einstein"
    },
    {   
        quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
        author: "Ray Goforth"
    },
    {
        quote: "Only put off until tomorrow what you are willing to die having left undone.",
        author: "Pablo Picasso"
    },
    {
        quote: "All Progress Takes Place Outside the Comfort Zone.",
        author: "Micheal Jhon Bobak"
    },
    {
        quote: "Fortune sides with him who dares.",
        author: "Vergilius"
    },
    {
        quote: "I am a great believer in luck, and I find the harder I work, the more I have of it.",
        author: "Thomas Jefferson"
    },
    {
        quote: "언성을 높이지 말고 논거를 강화하라.",
        author: "Unknown"
    },
    {
        quote: "늘 하던대로만 하면 늘 얻던 것을 얻는다.",
        author: "Unknown"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;

function quoteClick(event) {
    event.preventDefault();
    author.classList.toggle(HIDDEN_CLASSNAME);
}

quote.addEventListener("click", quoteClick);
