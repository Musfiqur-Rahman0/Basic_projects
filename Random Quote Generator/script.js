const quoteText = document.querySelector(".quoteText");
const authorName = document.querySelector(".authorName");
const generateBtn = document.querySelector(".generate");

// console.log(author);
const quotes = [
  {
    id: 1,
    author: "Steve Jobs",
    sentence: "The only way to do great work is to love what you do.",
  },
  {
    id: 2,
    author: "Elon Musk",
    sentence:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    id: 3,
    author: "Albert Einstein",
    sentence:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    id: 4,
    author: "Thomas Edison",
    sentence:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    id: 5,
    author: "Walt Disney",
    sentence: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 6,
    author: "Henry Ford",
    sentence: "Whether you think you can or you think you can't, you're right.",
  },
  {
    id: 7,
    author: "Oprah Winfrey",
    sentence:
      "The biggest adventure you can take is to live the life of your dreams.",
  },
  {
    id: 8,
    author: "Bruce Lee",
    sentence:
      "Absorb what is useful, discard what is not, add what is uniquely your own.",
  },
  {
    id: 9,
    author: "Confucius",
    sentence:
      "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: 10,
    author: "Maya Angelou",
    sentence: "Nothing will work unless you do.",
  },
];

quoteText.textContent = quotes[0].sentence;
authorName.textContent = quotes[0].author;

function generateQuote() {
  let index = randomIndex(quotes);
  let quote = quotes[index];
  const { author, sentence } = quote;
  quoteText.innerText = sentence;
  authorName.innerText = `${author}`;
}

function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return index;
}

generateBtn.addEventListener("click", generateQuote);
