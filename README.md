## Micromatch

This is a fork of the original [micromatch](https://www.npmjs.com/package/micromatch) on NPM. This fork has been modified to remove reliance on Node built-ins. Such as: `util`, `path`, `process`. The benchmarks, tests, and other dev-related files have been removed to make it easier to maintain just the `index.js` file; i.e., to keep this repo in sync with upstream changes.
