---
title: "Hub & Spoke Network Topology in Azure - Part 1"
date: "2024-03-25"
description: "Learn how to implement a hub and spoke network topology in Azure using Azure Virtual Network and Azure Firewall."
summary: "Learn how to implement a hub and spoke network topology in Azure using Azure Virtual Network and Azure Firewall."
tags: ["azure", "networking", "hub&spoke"]
categories: ["azure"]
series: ["Azure Networking"]
ShowToc: true
TocOpen: true
---
Hi,

Today, I would like to tell you about Hub & Spoke Network Topology in Azure. This is the first part of a series of articles about Azure Networking. In this part, we will learn how to implement a hub and spoke network topology in Azure using Azure Virtual Network and Azure VPN Gateway.

## What is Hub & Spoke Network Topology?
Hub & Spoke Network Topology is a network architecture where a central network (hub) is connected to multiple smaller networks (spokes). The hub is the central point of the network and the spokes are connected to the hub. This architecture is commonly used in enterprise networks to connect multiple branch offices to a central data center.