const core = require('@actions/core');
const github = require('@actions/github');

try {
  const branchName = core.getInput('branchName');

  console.log("branchName: " + branchName);

  let versionSuffix = "";

  if (branchName === "main") {
    versionSuffix = "inte"
  } else {
    versionSuffix = "ci"
  }

  console.log("versionSuffix: " + versionSuffix);

  core.setOutput("versionSuffix", versionSuffix);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}