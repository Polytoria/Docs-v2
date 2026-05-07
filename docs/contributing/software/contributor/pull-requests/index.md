---
title: PR Guidelines
weight: 1
---

# PR Guidelines

We welcome contributions to the project of any kind. However, to ensure a smooth contribution process, we have some guidelines for pull requests (PRs) that we ask contributors to follow.

## Before opening a PR

Before opening a PR, make sure to check the following:

For bug fixes, please make sure there is either:

- An existing issue for the bug you are fixing, or
- You have created an issue for the bug you are fixing.

For larger features, architectural changes, networking changes, scripting API changes, or behavior that affects compatibility, please open an issue or discussion first.

Small fixes like typos, comments, simple refactors and small bug fixes can be directly opened as a PR without opening an issue or discussion first.

A PR may be closed if it is inactive, too broad or not aligned with the project's goals.

## What makes a good PR?

Good PRs are focused on a single change or feature, are easy to review and are tested locally.

Please avoid mixing unrelated changes in a single PR. If your PR is large or complex, consider breaking it down into smaller PRs. This makes it easier for reviewers to understand and review your changes, which increases the chances of your PR being accepted.

## Local checks

Before opening a PR, please make sure to test your changes locally. Run:

```bash
dotnet restore
dotnet format
dotnet build
dotnet test --project Polytoria.Tests/Polytoria.Tests.csproj
```

## Review process

Once you have opened a PR, it will be reviewed by the maintainers. The maintainers may ask for changes or improvements to your PR. Please be responsive to feedback and make the necessary changes to get your PR merged.

## AI usage

If you used AI tools, disclose how you they were used in the PR description. 

You are responsible for understanding and verifying the output of any AI tools you used. You are allowed to use AI tools as part of your development process, but code that is generated largely by AI with little to no human authorship is prohibited and will be rejected.