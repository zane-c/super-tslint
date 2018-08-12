const colors = require('colors');

const InspireEngine = () => {

  const engine = {};
  const quotes = [
    {
      text: 'It is not enough for code to work.',
      author: 'Robert C. Martin'
    },
    {
      text: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
      author: 'Ellen Ullman',
    },
    {
      text: 'What one programmer can do in one month, two programmers can do in two months.',
      author: 'Fred Brooks',
    },
    {
      text: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
      author: 'Patrick McKenzie',
    },
    {
      text: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
      author: 'Andy Hunt',
    },
    {
      text: 'Java is to JavaScript as ham is to hamster.',
      author: 'Jeremy Keith, Resilient Web Design',
    },
    {
      text: 'One of the best programming skills you can have is knowing when to walk away for awhile.',
      author: 'Oscar Godson',
    },
    {
      text: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
      author: 'Louis Srygley',
    },
    {
      text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
      author: 'Harold Abelson, Structure and Interpretation of Computer Programs',
    },
    {
      text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
      author: 'John Woods',
    },
    {
      text: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
      author: 'Rick Cook, The Wizardry Compiled',
    },
    {
      text: 'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
      author: 'Waseem Latif',
    },
    {
      text: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
      author: 'Kent Beck',
    },
    {
      text: 'Walking on water and developing software from a specification are easy if both are frozen.',
      author: 'Edward Berard',
    },
    {
      text: 'Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write.',
      author: 'Robert C. Martin, Clean Code',
    },
    {
      text: 'A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.',
      author: 'Robert C. Martin, Clean Code',
    },
    {
      text: 'You should name a variable using the same care with which you name a first-born child.',
      author: 'Robert C. Martin, Clean Code',
    },
    {
      text: 'It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!',
      author: 'Robert C. Martin, Clean Code',
    },
    {
      text: 'The big optimizations come from refining the high-level design, not the individual routines.',
      author: 'Steve McConnell, Code Complete',
    },
    {
      text: 'if you can write "hello world" you can change the world',
      author: 'Raghu Venkatesh',
    },
    {
      text: 'The happiest moment i felt; is that moment when i realized my ability to create.',
      author: 'Dr. Hazem Ali',
    },
    {
      text: 'Programming isn\'t about what you know; it\'s about what you can figure out.',
      author: 'Chris Pine, Learn to Program',
    },
    {
      text: 'The perfect kind of architecture decision is the one which never has to be made',
      author: 'Robert C. Martin',
    },
    {
      text: 'Abstraction is the elimination of the irrelevant and the amplification of the essential.',
      author: ' Robert C. Martin',
    },
    {
      text: 'This approach is refreshing because most of the programming books I\'ve read are drier than a camel\'s fart.',
      author: 'Alan Dipert',
    },
    {
      text: 'Think twice, code once.',
      author: 'Waseem Latif',
    },
    {
      text: 'Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.',
      author: 'Joshua Bloch, Effective Java Programming Language Guide',
    },
    {
      text: 'Tests are stories we tell the next generation of programmers on a project.',
      author: 'Roy Osherove, The Art of Unit Testing',
    },
  ];

  const logRandomQuote = () => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`\n\n"${q.text}"\n`.green + `-- ${q.author}\n`);
  }

  engine.logRandomQuote = logRandomQuote;
  return engine;
};

module.exports = InspireEngine();
