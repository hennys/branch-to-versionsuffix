const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const branch = core.getInput('branch');
  console.log(`Branch: ${branch}`);

  const versionSuffix = "notCalculated";
  core.setOutput("versionSuffix", versionSuffix);

} catch (error) {
  core.setFailed(error.message);
}