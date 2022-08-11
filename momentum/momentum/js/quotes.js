const quotes = [
  {
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon.",
  },
  {
    quote:
      "The world is a book, and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote:
      "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
    author: "머더 테레사",
  },
  {
    quote:
      "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
    author: "맹자",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotesLength = quotes.length;

const todaysQuote = quotes[Math.floor(Math.random() * quotesLength)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
