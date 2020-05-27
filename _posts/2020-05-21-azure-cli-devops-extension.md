---
layout: post
title: "Azure CLI DevOps Extension"
date: 2020-05-21 11:00
author:
  name: Engin Polat
  alias: polatengin
category: [azure-devops, azure-cli]
tags: [az, cli, devops, extension]
---
> The Azure command-line interface (Azure CLI) is a set of commands used to create and manage Azure resources. The Azure CLI is available across Azure services and is designed to get you working quickly with Azure, with an emphasis on automation.

_Official documentation of the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest){:target="_blank"}_

With the [Azure DevOps extension](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops?view=azure-cli-latest){:target="_blank"}, we can reach most of the Azure DevOps services from the terminal, such as;

* [Create a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/project?view=azure-cli-latest#ext-azure-devops-az-devops-project-create){:target="_blank"}
* [Add user to a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/user?view=azure-cli-latest#ext-azure-devops-az-devops-user-add){:target="_blank"}
* [Create a Wiki Page in a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/wiki?view=azure-cli-latest#ext-azure-devops-az-devops-wiki-create){:target="_blank"}
* [Import a Repo to a Team Project](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/repos/import?view=azure-cli-latest){:target="_blank"}
* [Create a PR](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/repos/pr?view=azure-cli-latest#ext-azure-devops-az-repos-pr-create){:target="_blank"}
* [Create a Pipeline](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines?view=azure-cli-latest#ext-azure-devops-az-pipelines-create){:target="_blank"}
* [Run a Pipeline](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines?view=azure-cli-latest#ext-azure-devops-az-pipelines-run){:target="_blank"}

Capabilities are almost endless with the [Azure DevOps extension](https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops){:target="_blank"} 🎉

But, you need to install the extension first.

Fortunately, installing an extension to Azure CLI is trivial, you just need to add it to the extension list of Azure CLI and configure it;

```bash
az extension add --name azure-devops

az devops configure --defaults organization=https://dev.azure.com/organizationName project=projectName
```

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
