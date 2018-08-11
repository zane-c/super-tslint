const colors = require('colors');
const execSync = require('child_process').execSync;

const Linter = () => {
  const linter = {};
  let totalErrors = 0;
  let totalWarnings = 0;

  const lint = (projects, flags) => {
    try {
      projects.forEach(path => {
        const cmd = `node ./node_modules/tslint/bin/tslint --format stylish --force${flags.fix ? ' --fix ' : ' '}--project ${path}`;
        const output = execSync(cmd).toString('utf8');
        parseOutput(output);
      });

      let errMsg = `TOTAL ERRORS:       ${totalErrors}`;
      errMsg = totalErrors > 0 ? errMsg.red : errMsg;
      console.log(errMsg);

      let warnMsg = `TOTAL WARNINGS:     ${totalWarnings}`;
      warnMsg = totalWarnings > 0 ? warnMsg.yellow : warnMsg;
      console.log(warnMsg);

      if (totalErrors > 0) {
        process.exit(1);
      } else {
        process.exit(0);
      }
    } catch(response) {
      error(`Command failed "${response.cmd}"`);
    }
  };

  const parseOutput = (str) => {
    const lines = str.split('\n');
    lines.forEach(line => {
      const chunks = line.split('  ');
      if ((line.match(/ERROR: /g) || []).length) {
        console.log(`${chunks[0].red}  ${chunks[1].grey}  ${chunks[2].red}`);
        totalErrors += 1;
      } else if ((line.match(/WARNING: /g) || []).length) {
        console.log(`${chunks[0].yellow}  ${chunks[1].grey}  ${chunks[2].yellow}`);
        totalWarnings += 1;
      } else {
        console.log(line);
      }
    });
  };

  const watch = (projects, flags) => {
    
  };

  const error = (str) => {
    console.log('ERROR: '.red + str);
    process.exit(1);
  }

  linter.lint = lint;
  linter.error = error;
  linter.watch = watch;

  return linter;
};

module.exports = Linter();
