---
path: "how-to-find-and-delete-files-by-extension"
title: "How to find and delete files by extension"
description: "Creating, modifying and deleting files are everyday tasks performed in any operating system mostly used by System Administrators.<br /><br />Linux operating system provides users an easy way to delete files and directories.<br /><br />System Administrator (sysadmins), often need to clean things up to keep the system clean. This cleaning process may take quite a while, including finding and deleting files recursively in a folder structure."
date: "2021-08-10"
time: "9 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "how-to" ]
tags: [ "linux", "bash", "filesystem", "remove", "rm", "find", "delete" ]
---
Creating, modifying and deleting files are everyday tasks performed in any operating system mostly used by _System Administrators_.

_Linux_ operating system provides users an easy way to delete files and directories. This can be done using the [rm](http://www.linuxcommand.org/lc3_man_pages/rm1.html) command.

The `rm` command is the _remove_ command in the _Linux_ operating system. It can be used to delete _files_, _directories_ and _links_.

System Administrator (_sysadmins_), often need to clean things up to keep the system clean. This cleaning process may take quite a while, including finding and deleting files recursively in a folder structure.

One method for removing batches of files based on file _extensions_, or _filename patterns_, is the [find](http://www.linuxcommand.org/lc3_man_pages/find1.html) command.

The `find` command will search for all files and directories within a specific directory, and possibly even within nested subdirectories.

To begin, you will need to identify the specific directory that you want to search, such as;

```bash
cd "/root_folder"
```

If you wanted to search for all files with a _".log"_ extension, you would execute;

```bash
find . -name "*.log" -type f
```

With the _" . "_ we indicate that it has to search from the directory in which we are, and, with the _"*.log"_ we tell it to search for all files with the _".log"_ extension.

Finally, to delete the files, just add the `-delete` parameter at the end of the command;

```bash
find . -name "*.log" -type f -delete
```
