---
path: "how-to-remove-file-from-git-history"
title: "How to remove file from git history"
description: "When we commit a file to a git system (such as, Azure DevOps or GitHub) it shows up in the folder structure of the repo.<br /><br />And also, there is a record created in the underlying history structure.<br /><br />We can delete the file that needs to be confidential, after we accidentally commit it."
date: "2021-03-09"
time: "6 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "how-to" ]
tags: [ "git", "how-to", "remove", "file", "history" ]
---
When we commit a file to a git system (such as, [Azure DevOps](https://dev.azure.com/) or [GitHub](https://github.com)) it shows up in the folder structure of the repo.

And also, there is a record created in the underlying _history_ structure.

We can **delete** the file that needs to be _confidential_, after we _accidentally_ commit it.

But it'll stay in the **commit history** of the git system.

And anyone who can access the git system, can search through the commit history and find that file.

To delete a file from the git system, we can use the following command;

```bash
FILE_PATH_AND_NAME="src/backend/.env"
git rm -rf --cached --ignore-unmatch ${FILE_PATH_AND_NAME}
```

But, it'll not remove the file from the **commit history**. To remove it from the history as well, we can use the following command;

```bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch ${FILE_PATH_AND_NAME}" HEAD
```

This command will delete the file from the **commit history** and re-write the commit history without it.

> It may take so long to complete, regarding the size of the commit history of the repo. To give a scale, it may need almost a full hour if you have 10K commits and wanted to remove a file from one of the first commits.

After the command finishes, we just need to commit the changed history, by executing the following command;

```bash
git push --force
```

#### References

- [Git on Wikipedia](https://en.wikipedia.org/wiki/Git)

- [Viewing the Git Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

- [Remove file from the working tree](https://git-scm.com/docs/git-rm)

- [Rewrite branch](https://git-scm.com/docs/git-filter-branch)

- [Index-Filter option of the Filter-Branch command](https://git-scm.com/docs/git-filter-branch#Documentation/git-filter-branch.txt---index-filterltcommandgt)
