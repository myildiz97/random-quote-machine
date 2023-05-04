import "./styles.css";
import React from "react";

export default function App() {
  const [data, setData] = React.useState({
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
    color: "#23e4fc",
    prev: 0
  });

  function handleClick() {
    const quotes = {
      quote: [
        "Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        "So many books, so little time.",
        "A room without books is like a body without a soul.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You only live once, but if you do it right, once is enough.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "Be the change that you wish to see in the world.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "If you tell the truth, you don't have to remember anything."
      ],
      author: [
        "― Oscar Wilde",
        "― Albert Einstein",
        "― Frank Zappa",
        "― Marcus Tullius Cicero",
        "― Bernard M. Baruch",
        "― Mae West",
        "― Dr. Seuss",
        "― Mahatma Gandhi",
        "― Robert Frost",
        "― J.K. Rowling",
        "― Mark Twain"
      ]
    };

    let randomQuoteIndex;
    do {
      randomQuoteIndex = Math.floor(Math.random() * quotes.quote.length);
    } while (randomQuoteIndex === data.prev);

    const newQuote = quotes.quote[randomQuoteIndex];
    const newAuthor = quotes.author[randomQuoteIndex];
    /* */
    const colorItem = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    const randColor = ["#"];
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * colorItem.length);
      randColor.push(colorItem[randomNumber]);
    }
    const newColor = randColor.join("");

    setData({
      quote: newQuote,
      author: newAuthor,
      color: newColor,
      prev: randomQuoteIndex
    });
  }

  React.useEffect(() => {
    document.body.style.backgroundColor = data.color;
  }, [data.color]);

  return (
    <div id="quote-box">
      <div className="quote-info">
        <h1 id="text" style={{ color: data.color }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32371.png?w=826&t=st=1683200268~exp=1683200868~hmac=c4415f3a874f04b1264a44cab1161f9389c95b5624b829f7b41eb5c8d104d29f"
            alt="quote-img"
          />
          {data.quote}
        </h1>
        <h3 id="author" style={{ color: data.color }}>
          {data.author}
        </h3>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_top"
          style={{ backgroundColor: data.color }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png?w=826&t=st=1683200698~exp=1683201298~hmac=2a27ba8895bded572deffadb41fda8addc1d3e0fa3e5138f732d86113a52d9b9"
            alt="twitter-img"
          />
        </a>
        <button
          id="new-quote"
          onClick={handleClick}
          style={{ backgroundColor: data.color }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
