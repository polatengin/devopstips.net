---
path: "azure-devops-state-transition-restriction-rules"
title: "Azure DevOps - State Transition Restriction Rules"
description: "Since the release of Sprint #172 (official documentation: Sprint #172 Updates) on Azure DevOps, it's possible to create rules to restrict state transition of Work Items on Azure DevOps Boards.<br /><br />With this new feature, it's possible to restrict work items from being moved from one state to another directly. For example, you can restrict Bugs transitioning from New to Resolved directly, instead, they must go from New to Active, then they can go to Resolved."
date: "2021-02-20"
time: "6 mins"
author:
  name: "Engin Polat"
  alias: "polatengin"
  profilePictureUri: "https://avatars.githubusercontent.com/u/118744"
category: [ "how-to", "azure-devops" ]
tags: [ "state", "transition", "restriction", "rule", "azure-devops" ]
---
## What is State Transition Restriction Rule

Since the release of _Sprint #172_ (_official documentation: [Sprint #172 Updates](https://docs.microsoft.com/en-us/azure/devops/release-notes/2020/sprint-172-update)_) on [Azure DevOps](https://dev.azure.com), it's possible to create rules to restrict state transition of _Work Items_ on [Azure DevOps Boards](https://azure.microsoft.com/en-us/services/devops/boards/).

With this new feature, it's possible to restrict work items from being moved from one state to another directly. For example, you can restrict _Bugs_ transitioning from _New_ to _Resolved_ directly, instead, they must go from _New_ to _Active_, then they can go to _Resolved_.

## Guideline

To create a _State Transition Restriction Rule_ you need to create a new _process_ or _child process_

In this guideline, you'll find how to create an Agile Child Process and how to add a State Transition Restriction Rule into it

First, go to _Process list_ of the _Azure DevOps Organization_ (_<span>https://</span>dev.azure.com/{ORG&#95;NAME}/&#95;settings/process_) and create a child process, for example, from _Agile_ template...

![Create inherited process from Agile screenshot](../_static/assets/2021/02/azure-devops-state-transition-restriction-rules-0.png)

Then, click one of the work item types;

![Work Item Types screenshot](../_static/assets/2021/02/azure-devops-state-transition-restriction-rules-1.png)

Go to _Rules_ tab and create a new _Rule_

![Create new Rule screenshot](../_static/assets/2021/02/azure-devops-state-transition-restriction-rules-2.png)

You can create a new _Rule_, select _"A work item state moved from ..."_ from the "_Conditions_" section, and, _"Restriction the transition to state ..."_ from the _"Actions"_ section, like this;

![New Work Item Rule screenshot](../_static/assets/2021/02/azure-devops-state-transition-restriction-rules-3.png)

All of the possible _"Conditions"_;

* A work item is created ...
* A work item state changes to ...
* A work item state is not changed ... 
* A work item state changes from ...
* A work item state is ...
* A work item state is not ...
* A work item state moved from ...
* The value of ... (equals)
* The value of ... (not equals)
* A value is defined for ...
* No value is defined for ...
* A change was made to the value of ...
* No change was made to the value of ...
* Current user is member of group ...
* Current user is not member of group ...
