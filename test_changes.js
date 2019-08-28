
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const exec = promisify(require('child_process').exec);

const {
  TRAVIS_COMMIT = 'HEAD',
  TRAVIS_BUILD_NUMBER = '00',
  TRAVIS_BRANCH
} = process.env;

if(!TRAVIS_BRANCH) {
  throw new Error('TRAVIS_BRANCH is not defined');
}

const reportsFileName = path.resolve('test-report.html');

async function pushChanges(file, branch) {
  await exec('git config --global user.email "travis@travis-ci.org"');
  await exec('git config --global user.name "Travis CI"');
  await exec(`git add ${file}`);
  await exec(`git commit --message "Travis build: ${TRAVIS_BUILD_NUMBER}"`);
  await exec(`git remote add origin-pages https://${GH_TOKEN}@git@github.com/BTS-Interns-2019/internship_js.git > /dev/null 2>&1`);
  await exec(`git push --quiet --set-upstream origin ${branch}`);

}

async function testDirectory(testDir, branch) {
  const reportsDir = `${testDir}/html-reports`;
  // const reportsDir = `${__dirname}/html-reports/${testDir.replace(__dirname, '')}`;

  try {
    await exec(`npx jest --config=${__dirname}/jest.config.html.js ${testDir}`);
  } catch (e) {
    console.error("error running tests", e);
  }

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  const reportPath = `${reportsDir}/report_${branch}.html`;
  fs.copyFileSync(reportsFileName, reportPath);
  fs.unlinkSync(path.resolve(testDir, reportsFileName));

  try {
    await exec(`npx jest --config=${__dirname}/jest.config.html.js ${testDir}`);
  } catch (e) {
    console.error("error running tests", e);
    return null;
  }

  return reportPath;
}

async function test() {
  const { stdout, stderr } = await exec(`git diff-tree --no-commit-id --name-only -r ${TRAVIS_COMMIT}`);
  if (stderr) {
    throw new Error(stderr);
  }
  const changedDirs = stdout.split('\n').filter(file => file.trim()).map(file => path.resolve(path.dirname(file)));

  const uploadFiles = (await Promise.all(changedDirs.map((dir) => {
    console.log(dir);
    return testDirectory(dir, TRAVIS_BRANCH);
  }))).filter(f => f && fs.existsSync(f));

  if (uploadFiles.length) {
    await pushChanges(uploadFiles.join(' '), TRAVIS_BRANCH);
  }
}
test();
