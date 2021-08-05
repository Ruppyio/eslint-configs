# Contributing to Ruppy's Configs

We would love for you to contribute to Ruppy's ESLint Configs and
help it make it even better than today. We welcome you [with arms wide open~! 🎶][creed]

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

[creed]: https://www.youtube.com/watch?v=99j0zLuNhi8 "Creed - With Arms Wide Open"

## Project Setup

1. Fork this repo, then clone your forked repo to your machine.

   ```bin
   git clone https://github.com/<YOUR_USERNAME>/eslint-configs.git
   ```

2. Make sure you are always in sync with this original repository.

   ```bin
   # do this once
   git remote add upstream https://github.com/Ruppyio/eslint-configs.git

   # do this whenever you want to sync with original repository
   git checkout main
   git fetch upstream && git rebase upstream/main
   ```

   > This will add the original repository as a remote called `upstream` while remote to your forked repo is usually called `origin` when you clone it by default.
   >
   > Do regular sync with original repository.
   >
   > If you want to push the synced local to your forked repo, do this command:
   >
   > ```bin
   > git push origin main
   > ```

3. Install dependencies using `yarn`.

   ```bin
   yarn
   ```

4. Run the test.

   ```bin
   yarn test
   ```

## Make a Change

1. Create a branch for your change.

   ```bin
   git checkout -q -b <NEW_BRANCH_NAME> --no-track HEAD
   ```

2. Modify or create the changes.
3. Only one feature or fix per branch.
4. Create new test for new feature or test the new fix.
5. **Run the test** before commiting and push the change.
6. Commit the change with good descriptive commit message. See our [commit message guideline](#commit-message-guidelines).

## Make a Pull Request

1. Push your change to your forked repository.

   ```bin
   git push <remote> <branch_name>

   example:
   git push origin feature/branch
   ```

2. [Submit a pull request](https://github.com/Ruppyio/eslint-configs/compare/)
3. Wait for our review.

## Commit Message Guidelines

We follow [Conventional Commits](http://conventionalcommits.org/) guidelines.
