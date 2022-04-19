---
path: "deploying-azure-log-analytics-solution-using-terraform"
title: "Deploying Azure Log Analytics Solution Using Terraform"
description: ""
date: "2022-04-16"
time: "6 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "how-to", "terraform", "azure" ]
tags: [ "azure", "terraform", "azure-log-analytics", "azure-log-analytics-solution", "azure-resource-group", "azire-cli" ]
---
If it's needed to deploy [Azure Log Analytics Solution](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution) using [Terraform](https://www.terraform.io/), you can use the following [Terraform](https://www.terraform.io/) structure,

```terraform
resource "azurerm_resource_group" "rg" {
  name     = "rg-sample"
  location = "westus3"
}

resource "azurerm_log_analytics_workspace" "workspace" {
  name                = "alaw-sample"
  location            = "${azurerm_resource_group.rg.location}"
  resource_group_name = "${azurerm_resource_group.rg.name}"
  sku                 = "Free"
}

resource "azurerm_log_analytics_solution" "solution" {
  solution_name         = "ContainerInsights"
  location              = "${azurerm_resource_group.rg.location}"
  resource_group_name   = "${azurerm_resource_group.rg.name}"
  workspace_resource_id = "${azurerm_log_analytics_workspace.workspace.id}"
  workspace_name        = "${azurerm_log_analytics_workspace.workspace.name}"

  plan {
    publisher = "Microsoft"
    product   = "OMSGallery/ContainerInsights"
  }
}
```

It's possible to deploy an [Azure Resource Group](https://docs.microsoft.com/en-us/cli/azure/group), an [Azure Log Analytics Workspace](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/workspace) and an [Azure Log Analytics Solution](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution) (for [Container Monitoring](https://docs.microsoft.com/en-us/azure/azure-monitor/containers/container-insights-overview)) using the following command,

```bash
terraform init
terraform apply -auto-approve
```

Unfortunately, list of [Azure Log Analytics Solutions](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution) is not available in the [Terraform](https://www.terraform.io/) provider 😟

Official _Terraform Resource Provider_ page for _Azure Log Analytics Solution_ displays only _ContainerInsights_ example, [azurerm_log_analytics_solution](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/log_analytics_solution)

If there is already an [Azure Subscription](https://azure.microsoft.com/en-us/free/), that has [Azure Log Analytics Solutions](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution) installed, and it's needed to create a _Terraform Module_ out of it, following command will list the installed [Azure Log Analytics Solutions](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution),

```bash
# List all log-analytics solutions in the current subscription
az monitor log-analytics solution list

# List all log-analytics solutions for a specific subscription
az monitor log-analytics solution list --subscription ${SUBSCRIPTION_ID}

# List all log-analytics solutions in a resource group
az monitor log-analytics solution list --resource-group ${RESOURCE_GROUP_NAME}
```

When the command above is executed, it will list the installed [Azure Log Analytics Solutions](https://docs.microsoft.com/en-us/cli/azure/monitor/log-analytics/solution), and it's possible to create a _Terraform Module_ using the output of the command,

```terraform
resource "azurerm_log_analytics_solution" "solution" {
  solution_name         = "{Product name from the command output}"
  location              = "${azurerm_resource_group.rg.location}"
  resource_group_name   = "${azurerm_resource_group.rg.name}"
  workspace_resource_id = "${azurerm_log_analytics_workspace.workspace.id}"
  workspace_name        = "${azurerm_log_analytics_workspace.workspace.name}"

  plan {
    publisher = "{Publisher name from the command output}"
    product   = "{Product name from the command output}"
  }
}
```

> _Note_: Before running Azure CLI commands, Log Analytics Solution Extension should be installed; `az extension add --name log-analytics-solution`
