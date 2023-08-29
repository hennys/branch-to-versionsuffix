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

} catch (error) {
  core.setFailed(error.message);
}