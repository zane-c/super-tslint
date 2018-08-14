const colors = require('colors');
const execSync = require('child_process').execSync;
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');

const Linter = () => {
  const linter = {};
  let totalErrors = 0;
  let totalWarnings = 0;

  const dir = path.resolve(__dirname);
  const superPath = `${dir}/../bin/super-tslint`;
  let tslintPath;
  let nodemonPath;

  // check for global or local installation
  if (fs.existsSync(`${dir}/../node_modules/tslint/bin/tslint`)) {
    tslintPath = `${dir}/../node_modules/tslint/bin/tslint`;
    nodemonPath = `${dir}/../node_modules/nodemon/bin/nodemon`;
  } else {
    tslintPath = `${dir}/../../tslint/bin/tslint`;
    nodemonPath = `${dir}/../../nodemon/bin/nodemon`;
  }

  const run = (cmd) => {
    try {
      const output = execSync(cmd).toString('utf8');
      return output;
    } catch(response) {
      process.exit(1);
    }
  }

  const lint = (args) => {
    const cmd = `node ${tslintPath} ${args.join(' ')} --format stylish --force`;
    const output = run(cmd);
    parseOutput(output);
    summaryAndReturn();
  };

  const lintWatch = (args) => {
    const tslint = `node ${superPath} ${args.join(' ')} || exit 0`;
    const cmd = `${nodemonPath} --delay 3 -e ts -x "${tslint}"`;
    const stream = spawn('node', cmd.split(' '));

    stream.stdout.on('data', function (data) {
      console.log(data.toString());
    });
  };

  const lintAll = (projects, args) => {
    projects.forEach(path => {
      const cmd = `node ${tslintPath} ${args.join(' ')} --format stylish --force --project ${path}`;
      const output = run(cmd);
      parseOutput(output);
    });
    summaryAndReturn();
  };

  const parseOutput = (str) => {
    const lines = str.split('\n');
    lines.forEach(line => {
      const chunks = line.split('  ').filter(g => g.trim().length);
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
