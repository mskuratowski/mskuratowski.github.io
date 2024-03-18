---
title: "Configure Azure Budgets"
date: "2024-03-18"
description: "Discover how Azure Budget empowers organizations to master their cloud spending with proactive budgeting, customizable alerts."
summary: "Discover how Azure Budget empowers organizations to master their cloud spending with proactive budgeting, customizable alerts."
tags: ["azure", "azure budget"]
categories: ["azure"]
series: ["Azure Costs"]
ShowToc: true
TocOpen: true
---
Today I want to write about Azure Budgets.
Imagine that you have for example Sandbox Subscription where you can test some Azure Services and of course by innocent you can create some expensive resource and delete if after testing.

I think it is a good idea to create an Azure Budget.

Below I will show you how to add an Azure Budget for a subscription.
Select your subscription and go to "Budgets" under Cost Management Settings.

![Azure Budget](/post_2_1.png)

Then click "+Add
As you can see, you can select Scope and set filters. 
You will also need to provide a name, reset period name, dates and budget amount.

![Azure Budget](/post_2_2.png)

Then you need to configure alert conditions.
You can choose between two types: Actual and Forecasted and I truly recommend to setup at least both.

![Azure Budget](/post_2_3.png)

Read more about it on [Microsoft Docs](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets)

Take aways:
1. Stay Ahead of Spending: Azure Budget lets you set spending limits to prevent budget overruns, promoting a cost-conscious culture within your organization.
2. Get Timely Alerts: Customize alerts to know when you're nearing or exceeding your budget, enabling swift action to keep finances in check.
3. Detailed Control: With Azure Budget, you gain the ability to monitor and manage spending at both macro and micro levels, ensuring every dollar is optimally allocated.
5. Integrates Seamlessly: It works together with other Azure cost management tools, offering a unified view of your cloud finances for better decision-making.

