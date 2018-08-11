const colors = require('colors');

const InspireEngine = () => {

  const engine = {};
  const quotes = [
    {
      text: 'It is not enough for code to work.',
      author: 'Robert C. Martin'
    }
  ];

  const logRandomQuote = () => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`\n\n"${q.text}"\n`.green + `-- ${q.author}\n`);
  }

  engine.logRandomQuote = logRandomQuote;
  return engine;
};

module.exports = InspireEngine();
