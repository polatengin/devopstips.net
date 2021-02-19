---
path: "azure-cli-devops-extension"
title: "Azure CLI DevOps Extension"
description: "Azure Command Line Interface (Azure CLI) is a set of commands to manage resources on Azure platform. The Azure CLI is available across Azure services and is designed to get you working quickly with Azure, with an emphasis on automation."
date: "2021-02-19"
time: "2 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "azure-devops", "azure-cli" ]
tags: [ "az", "cli", "devops", "extension" ]
---
> The Azure command-line interface (Azure CLI) is a set of commands used to create and manage Azure resources.
>
> The Azure CLI is available across Azure services and is designed to get you working quickly with Azure, with an emphasis on automation.

_Official documentation of the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest)_

With the [Azure DevOps extension](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops?view=azure-cli-latest), we can reach most of the Azure DevOps services from the terminal, such as;

* [Create a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/project?view=azure-cli-latest#ext-azure-devops-az-devops-project-create)
* [Add user to a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/user?view=azure-cli-latest#ext-azure-devops-az-devops-user-add)
* [Create a Wiki Page in a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/wiki?view=azure-cli-latest#ext-azure-devops-az-devops-wiki-create)
* [Import a Repo to a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/repos/import?view=azure-cli-latest)
* [Create a PR](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/repos/pr?view=azure-cli-latest#ext-azure-devops-az-repos-pr-create)
* [Create a Pipeline](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines?view=azure-cli-latest#ext-azure-devops-az-pipelines-create)
* [Run a Pipeline](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines?view=azure-cli-latest#ext-azure-devops-az-pipelines-run)

Capabilities are almost endless with the [Azure DevOps extension](https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops) 🎉

But, you need to install the extension first.

Fortunately, installing an extension to [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) is trivial, you just need to add it to the extension list of [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) and configure it;

<script src="https://gist.github.com/polatengin/762ab742a98e0685493b923093625a94.js?file=install-and-configure.sh"></script>

Usage is simple;

```bash
$ az devops --help

Group
    az devops : Manage Azure DevOps organization level operations.
        Related Groups
        az pipelines: Manage Azure Pipelines
        az boards: Manage Azure Boards
        az repos: Manage Azure Repos
        az artifacts: Manage Azure Artifacts.

Subgroups:
    admin            : Manage administration operations.
    extension        : Manage extensions.
    project          : Manage team projects.
    security         : Manage security related operations.
    service-endpoint : Manage service endpoints/service connections.
    team             : Manage teams.
    user             : Manage users.
    wiki             : Manage wikis.

Commands:
    configure        : Configure the Azure DevOps CLI or view your configuration.
    feedback         : Displays information on how to provide feedback to the Azure DevOps CLI team.
    invoke           : This command will invoke request for any DevOps area and resource. Please use
                       only json output as the response of this command is not fixed. Helpful docs -
                       https://docs.microsoft.com/rest/api/azure/devops/.
    login            : Set the credential (PAT) to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
```

If you want to take a look at (and hopefully contribute to) _Azure CLI DevOps Extension_ code, it's open-sourced on GitHub with ❤ [Azure DevOps Extension for Azure CLI](https://github.com/Azure/azure-devops-cli-extension)
