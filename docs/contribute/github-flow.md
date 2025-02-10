<!-- Space: PROYEC -->
<!-- Parent: Prueba2 -->
<!-- Title: Contributing GithubFlow Prueba2 -->
<!-- Label: Prueba2 -->
<!-- Label: Project -->
<!-- Label: Contributing -->
<!-- Label: GithubFlow -->
<!-- Include: ./../disclaimer.md -->
<!-- Include: ac:toc -->

To contribute to prueba2 project on [GitLab](https://gitlab.infosisglobal.com/zeus-admin-mensagger/prueba2), We use [GitHub Flow](https://githubflow.github.io/), it means that you should branch from the main repository and contribute back by making [merge_requests](https://gitlab.infosisglobal.com/zeus-admin-mensagger/prueba2/-/merge_requests).

GitHub Flow is very lightweight (especially compared to GitFlow). This workflow uses only two kinds of branches:

- Feature branch
- Main branch (previously called master)

The _feature_ branches are used to develop new features as well as fixes. These branches are usually created out of main.

Anything in the _main_ branch is deployable. The _main_ branch is expected to be deployed regularly and is considered stable.

For more information see [GitHub Flow](https://githubflow.github.io/)

## Getting started

To follow the instructions in this guide and start contributing to prueba2 project on Gitlab:

1. **Fork** the repo on GitLab
2. **Clone** the project to your own machine

To synchronize with the main repository, add it to the remotes:

```bash
git remote add upstream  https://gitlab.infosisglobal.com/zeus-admin-mensagger/prueba2.git
```

Now your **upstream** points to **zeus-admin-mensagger/prueba2**.

## Branches

### master or main

The master branch contains production code and it stores the official release history.

### Feature Branch

Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of master, **feature branches** use develop as their parent branch.

- When a feature is complete, it gets merged back into main.

## Merge requirements

### No merge conflicts

Resolve any merge conflicts that may arise. If conflict occurs, a corresponding message will be displayed on the MR page on Gitlab.

To resolve a conflict, run the following commands.

```bash
# checkout a branch you open MR from
git fetch upstream # assuming upstream is zeus-admin-mensagger/prueba2
git merge upstream/merge_branch # Where merge_branch is a branch you open merge request against.
# resolve merge requests
git add changed_files
git commit
git push
```

Gitlab will automatically update your merge request.

### Testing

All merge requests are automatically tested using [GitLabCi](https://docs.gitlab.com/ee/ci). In case some tests fail, fix the issues or describe why the fix cannot be done.

### Review

Every merge request is reviewed by the assigned team members as per standard [Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/). Reviewers can comment on a MR, approve it, or request changes to it. A MR can be merged when it is approved by at least two assigned reviewers and has no pending requests for changes.

## Code of Conduct

Please have a look at our [Code of Conduct](../code_of_conduct.md) before you write an Issue or make a PR.
