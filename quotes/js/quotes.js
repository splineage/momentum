const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
console.log(quotes[0]);

Math.random() // 0~1 사이값.
Math.round() // 반올림. ceil(올림), floor(버림)
console.log(Math.round(Math.random()*10))

const quotesLength = quotes.length;
const index = Math.floor(Math.random() * quotesLength);
const todayQuote = quotes[index];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

function randomRange(start, end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}