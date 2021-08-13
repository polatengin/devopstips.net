---
path: "good-practices-for-creating-pull-requests"
title: "Good practices for creating Pull Requests"
description: "Before Git, the open source community used mailing lists for collaboration. Because of this, people had to write very long emails in order to justify their work. This caused a lot of friction because people had to spend a lot of time to write long emails and wait for a response from someone else.<br /><br />With Git, your changes are local and you can push changes as soon as they are ready. This leads to more efficient and focused discussions."
date: "2021-08-03"
time: "18 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "how-to" ]
tags: [ "git", "github", "cli", "pr", "pull-request", "review" ]
---
Before Git, the open source community used mailing lists for collaboration. Because of this, people had to write very long emails in order to justify their work. This caused a lot of friction because people had to spend a lot of time to write long emails and wait for a response from someone else.

With Git, your changes are local and you can push changes as soon as they are ready. This leads to more efficient and focused discussions.

Pull Requests are a relatively new tool that allow teams and developers to share, discuss, and merge code. They are a great tool for collaboration and communication. Pull Requests allow a developer to share their work with the team in progress, rather than showing up to a meeting with a completed feature or bug fix.

This way, the team can review, discuss, and comment on the proposed changes. Pull Requests also allow a developer to get feedback on their code from peers. This is one of the best indicators of the health of a team.

Pull Requests are a great way to introduce peer code review into the development process. The concept is simple: developers can request that a code change be pulled into the main branch of a project.

This differs from a patch which is a piece of code that is sent by email to a project maintainer, who then reviews the code and either applies the patch or not. The great thing about pull requests is that they make it easy to discuss code with others.

Pull requests are also a way to consolidate code reviews, discussions, and commits. They help ensure that the team's codebase is easy to work with, and they make it easier to keep track of who did what. By having everyone's code changes reviewed before they're merged into the project's codebase, you can ensure that the code that gets merged is clean and follows the project's guidelines. This helps the team avoid bugs, and it also helps avoid situations where one person's changes break another person's code.

One of the other advantages of creating _Pull Requests_ is; it's helping drastically improve the quality of code and documentation. As the quality improves, the project team also gains more confidence and therefore has more time to solve more quality problems.

Pull requests really help to share knowledge and adjust peoples thinking. Many people know more parts of the code than before, and learn some skills from each other.

## How to create a Pull Request

Creating a Pull Request is so trivial.

First we need a service that hosts git repositories, such as, Github, Azure DevOps, Bitbucket, Gitlab, etc.

```bash
git checkout -b <branch-name>
```

After checkout to the intended branch, developer will make the changes, and create a commit;

```bash
git add .

git commit -m "fix(shopping-cart): sum of the items prices in the shopping cart"
```

Now we need to push the changes to the remote repository;

```bash
git push -u origin <branch-name>
```

It's time to create the _Pull Request_, [GitHub CLI](https://cli.github.com/) has a command to do this, [gh pr create](https://cli.github.com/manual/gh_pr_create)

```bash
gh pr create --title "shopping cart grand total fix" --body "sum of the items prices in the shopping cart calculated correct again 🥳" --reviewer "polatengin"
```

## Good practices for Pull Requests

There are some tips and good practices that we can use when creating _Pull Requests_, one of the most important parts of developers' lives.

### Review your own Pull Request

It is important that you review your pull request before asking someone else to review it. That is because you may miss important things due to your familiarity with the code that you have written.

Also, check out the guidelines below to make sure that your code is ready for review, such as, tests, documentation and formatting.

Sometimes, people have trouble reviewing their own code. It's a totally normal thing! We all have blind spots. When people start contributing to open source projects, they often need someone else to review their work before they submit it. This is because they are not used to the style and often don't catch their own mistakes. Even experienced developers frequently need review!

### Make sure the code builds and works

When you are going to contribute to an open source project, please do all testing on your local machine. Yes, it works on my machine is the worst excuse for not testing. It is unreliable and leads to frustration. If it doesn't work on your machine, it's unlikely to work on other machines as well.

If you don't have access to a machine that runs the software you're working with, it's your responsibility to find one — or build a virtual machine using a service like Vagrant. There's no excuse for not testing.

It is also important to test the code on different environments as much as possible before sending a Pull Request. An important thing to check is that the page is working and that user interaction is possible.

### Make small Pull Requests (and often)

We value quickness and agility in our team. In order to achieve this, we need effective communication and reviews in order to be able to close Pull Requests quickly. We do not enjoy when people do not follow the team's process and raise comments in an asynchronous manner.

The goal of review should be to get code merged into the main branch as quickly as possible. As soon as the code is merged, it is out of the reviewers' hands. Reviewers should be focused on the code in front of them, not distracted by discussions about unrelated topics.

When we first started to use this way of working we saw that when we had a team member with a really big pull request it took a bit longer time to get the pull request reviewed and merged. After a while we learned that we should never create a pull request which contained more than one day of work from a team member. Instead we should split the story into smaller stories and do a pull request for each one. This also helps us to get the work done faster because we don't wait for all the feedback before we start working on the next story.

Smaller commits lead to more frequent deployments and a greater feeling of progress. It also makes bugs easier to track down, since there are fewer changes to the codebase.

The smaller the Pull Requests, the better.

### Write a good description

The description written in the pull request is one of the most important and useful parts of reviewing it. If someone reviewing the code sees that hundreds of lines have been added, dozens of lines deleted, and multiple files have been renamed, they probably don't know the reason for these changes, so in order to help them review your code, please leave a good description to explain what you are doing.

Writing a complete description in the pull request will help provide context for the review.

### Automate everything possible

Automation is a key part of good _DevOps_ practice. Ideally, automation leads to an increase in quality and consistency. It also helps to reduce the amount of time it takes to deploy new code to production.

When you have automated steps in place, you can easily deploy your app and move on to the next task.

There are some steps that can easily automated;

- _Tests:_ Tests should run automatically whenever a Pull Request is opened or updated. The branch should not be merged unless the tests pass.

- _Documentation:_ Maintaining documentation is a very tedious process, so the more automated the process, the better. For example, if we are developing a documented API, we can automatically generate it as OpenAPI.

- _Formatting the code:_ Checking the formatting of the code can also be automated and merging can be blocked if the format is not correct. Check the documentation format to avoid comments on the Pull Request, such as "this line is too long", "this method is too large", "this class is not well formatted", "variable name doesn't follow naming convention".
