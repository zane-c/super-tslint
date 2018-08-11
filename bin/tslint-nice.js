const globby = require("globby");
const linter = require('../src/linter');
const inspire = require('../src/inspire');

const cwd = process.cwd();
const args = process.argv.slice(2);

/* Handle flags */

let ALL_FLAG = false;
let WATCH_FLAG = false;
let INSPIRE_FLAG = false;

if (args.indexOf('--all') !== -1) {
  ALL_FLAG = true;
  args.splice(args.indexOf('--all'), 1);
}

if (args.indexOf('--watch') !== -1) {
  WATCH_FLAG = true;
  args.splice(args.indexOf('--watch'), 1);
}

if (args.indexOf('--quote') !== -1) {
  INSPIRE_FLAG = true;
}

/* Run Linter */

if (INSPIRE_FLAG) {
  inspire.logRandomQuote();

} else if (ALL_FLAG && WATCH_FLAG) {
  const paths = globby.sync([`${cwd}/**/tsconfig*`]);
  linter.lintWatchAll(paths, args);

} else if (ALL_FLAG) {
  const paths = globby.sync([`${cwd}/**/tsconfig*`]);
  linter.lintAll(paths, args);

} else if (WATCH_FLAG) {
  linter.lintWatch(args);

} else {
  linter.lint(args);
}