
const { promisify } = require('util');
const path = require('path');
const exec = promisify(require('child_process').exec);

const {
  TRAVIS_COMMIT = "HEAD",
  TRAVIS_BRANCH
} = process.env;

if(!TRAVIS_BRANCH) {
  throw new Error('TRAVIS_BRANCH is not defined');
}

async function test() {
  const { stdout, stderr } = await exec(`git diff-tree --no-commit-id --name-only -r ${TRAVIS_COMMIT}`);
  if (stderr) {
    throw new Error(stderr);
  }
  const changedDirs = stdout.split('\n').filter(file => file.trim()).map(file => path.resolve(path.dirname(file)));

  changedDirs.forEach(async (dir) => {
    await exec(`JEST_HTML_REPORTER_OUTPUT_PATH="${dir}/test-report_${TRAVIS_BRANCH}.html" && npx jest --config=jest.config.html.js ${dir}`)
  });
}
test();

