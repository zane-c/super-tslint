const colors = require('colors');
const execSync = require('child_process').execSync;

const Linter = () => {
  const linter = {};
  let totalErrors = 0;
  let totalWarnings = 0;

  const run = (cmd) => {
    try {
      const output = execSync(cmd).toString('utf8');
      return output;
    } catch(response) {
      process.exit(1);
    }
  }

  const lint = (args) => {
    const baseCmd = `node ./node_modules/tslint/bin/tslint ${args.join(' ')}`;
    const fullCmd = `${baseCmd} --format stylish --force`;
    const output = run(fullCmd);
    parseOutput(output);
    summaryAndReturn();
  };

  const lintAll = (projects, args) => {
    projects.forEach(path => {
      const baseCmd = `node ./node_modules/tslint/bin/tslint ${args.join(' ')}`;
      const fullCmd = `${baseCmd} --format stylish --force --project ${path}`;
      const output = run(fullCmd);
      parseOutput(output);
    });
    summaryAndReturn();
  };

  const lintWatch = (projects, flags) => {
  
  };

  const parseOutput = (str) => {
    const lines = str.split('\n');
    lines.forEach(line => {
      const chunks = line.split('  ');
      if ((line.match(/ERROR: /g) || []).length) {
        console.log(`${chunks[0].red}  ${chunks[1].grey}  ${chunks[2].cyan}`);
        totalErrors += 1;
      } else if ((line.match(/WARNING: /g) || []).length) {
        console.log(`${chunks[0].yellow}  ${chunks[1].grey}  ${chunks[2].cyan}`);
        totalWarnings += 1;
      } else {
        console.log(line);
      }
    });
  };

  const summaryAndReturn = () => {
    let errMsg = `TOTAL ERRORS:     ${totalErrors}`;
    errMsg = totalErrors > 0 ? errMsg.red : errMsg;
    console.log(errMsg);

    let warnMsg = `TOTAL WARNINGS:   ${totalWarnings}`;
    warnMsg = totalWarnings > 0 ? warnMsg.yellow : warnMsg;
    console.log(warnMsg);

    if (totalErrors > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  }

  const error = (str) => {
    console.log('ERROR: '.red + str);
    process.exit(1);
  }

  linter.lint = lint;
  linter.lintAll = lintAll;
  linter.lintWatch = lintWatch;
  linter.error = error;

  return linter;
};

module.exports = Linter();
