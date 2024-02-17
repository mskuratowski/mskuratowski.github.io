---
title: "Start/Stop Azure Application Gateway"
date: "2023-02-12"
description: "Discover how to automate the starting and stopping of Azure Application Gateways using PowerShell scripts and Azure Pipelines."
summary: "Discover how to automate the starting and stopping of Azure Application Gateways using PowerShell scripts and Azure Pipelines."
tags: ["azure", "azure application gateway", "azure devops", "azure pipelines"]
categories: ["azure"]
series: ["Azure Application Gateway"]
ShowToc: true
TocOpen: true
---
Hello everyone,

Today I would like to tell you how to turn on/off your Azure Application Gateway for your e.g. test environments to save costs.

Azure Application Gateways cost a bit.
For example, Azure Application Gateway v2 with WAF costs about 340 USD in Western Europe.

Unfortunately there is no way to do this from the GUI.

Imagine you have a test environment that is used by others only during business hours like 9-7. In this case, you can turn off Azure Application Gateway for the rest of the day and save money.

Below is a Powershell script that shows you how to do this.

```powershell {linenos=true}
param(
    [Parameter(Mandatory)]
    [String]$resourceGroupName,
    [Parameter(Mandatory)]
    [String]$appGatewayName,
    [Parameter(Mandatory)]
    [Boolean]$enabled
)

$appGateway = Get-AzApplicationGateway -Name $appGatewayName -ResourceGroupName $resourceGroupName

if ($enabled -eq $true -and $appGateway.OperationalState -eq "Stopped") {
    Write-Host "Starting the application gateway."
    Start-AzApplicationGateway -ApplicationGateway $appGateway
}

if ($enabled -eq $false -and $appGateway.OperationalState -eq "Running") {
    Write-Host "Stopping the application gateway."
    Stop-AzApplicationGateway -ApplicationGateway $appGateway
}
```

If you want to **STOP** you AppGw you can run
```powershell {linenos=true}
.\appgw-shutdown.ps1 -resourceGroupName "<your resource group name>" -appGatewayName "<your application gateway name>" -enabled $false
```

If you want to **START** you AppGw you can run
```powershell {linenos=true}
.\appgw-shutdown.ps1 -resourceGroupName "<your resource group name>" -appGatewayName "<your application gateway name>" -enabled $true
```

It's fine that I can run the script manually, but I want to automate it and not think about it.  So I decided to use Azure Pipelines to create two pipelines: one to start and one to stop Azure Application Gateways.

**START AZURE APPLICATION GATEWAY PIPELINE**
```YAML {linenos=true}
trigger: none

pool:
  vmImage: ubuntu-latest

schedules:
  - cron: "0 6 * * *" # Runs at 06:00 UTC every day for the start operation
    displayName: Start Operation Schedule
    branches:
      include:
      - main
    always: true

parameters:
- name: resourceGroupName
  type: string
  default: '<your resource group name>'
- name: resources
  type: object
  default:
  - appGwName: <your application gateway name_1>
    enabled: $true
  - appGwName: <your application gateway name_2>
    enabled: $true

stages:
- stage: StartAppGw
  jobs:
  - job: StartAppGw
    displayName: 'Start Azure Application Gateways'
    steps:
    - ${{ each resource in parameters.resources }}:
      - task: AzurePowerShell@5
        inputs:
          azureSubscription: '<service_connection>'
          ScriptType: 'FilePath'
          ScriptPath: '<your_script_path>'
          ScriptArguments: '-resourceGroupName ${{ parameters.resourceGroupName }} -appGatewayName ${{ resource.appGwName }} -enabled ${{ resource.enabled }}'
          azurePowerShellVersion: 'LatestVersion'
```

As you can see above, I am creating a scheduled pipeline. 
In my case I used cron: "0 6 * * *", so it runs every day at 06:00 UTC for the start operation. 

You also need to configure  [Azure DevOps service connection](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml).

Please note that my pipeline allows to put the list of Azure application gateways in the same resource group. In my case, I had to start/stop several Azure Application Gateways every day. 

If you want to create a stop Azure Application Gateway, you can copy the above Azure pipelines and change some lines, for example:

**STOP AZURE APPLICATION GATEWAY PIPELINE**
```YAML {linenos=true}
trigger: none

pool:
  vmImage: ubuntu-latest

schedules:
  - cron: "0 21 * * *" # Runs at 21:00 UTC every day for the start operation
    displayName: Stop Operation Schedule
    branches:
      include:
      - main
    always: true

parameters:
- name: resourceGroupName
  type: string
  default: '<your resource group name>'
- name: resources
  type: object
  default:
  - appGwName: <your application gateway name_1>
    enabled: $true
  - appGwName: <your application gateway name_2>
    enabled: $true

stages:
- stage: StartAppGw
  jobs:
  - job: StartAppGw
    displayName: 'Stop Azure Application Gateways'
    steps:
    - ${{ each resource in parameters.resources }}:
      - task: AzurePowerShell@5
        inputs:
          azureSubscription: '<service_connection>'
          ScriptType: 'FilePath'
          ScriptPath: '<your_script_path>'
          ScriptArguments: '-resourceGroupName ${{ parameters.resourceGroupName }} -appGatewayName ${{ resource.appGwName }} -enabled ${{ resource.enabled }}'
          azurePowerShellVersion: 'LatestVersion'
```

You can also run the pipeline manually at any time from the Azure DevOps Portal.
![Manually run Azure DevOps Pipeline](/post_1_1.png)


Automating the start and stop of Azure Application Gateways in testing and PoC environments not only streamlines operations but also leads to substantial cost savings by ensuring resources are utilized only when needed. I encourage readers to tailor this guide to their unique scenarios and delve deeper into Azure's cost optimization practices to further enhance their cloud efficiency and savings.


If you have any questions or would like to discuss this topic further, please don't hesitate to reach out directly via X @mskuratowski or connect with me on LinkedIn. I'm always open to conversations and eager to help you navigate your Azure optimization journey.