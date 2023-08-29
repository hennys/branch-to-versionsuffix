# branch-to-versionsuffix action

This action will take a branch name and calculate a suitable version suffix based on it.

## Inputs 

### `branch`

**Required** The name of the current branch.

## Outputs

### `versionSuffix`


## Example usage

```yaml
uses: actions/branch-to-versionsuffix@main
with:
  branchName: ${{ github.ref }}
```