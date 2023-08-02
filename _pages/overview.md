---
layout: page
permalink: /overview/
title: Research Overview
description: 
nav: false
nav_order: 1
---

### Community detection
Extracting underlying community structure on graphs such as social networks, collaboration networks, citation networks etc., provides insight into the characteristic properties of these networks. The underlying network is abstracted using a probabilistic graph structure on which the community detection algorithm is employed. The communities so obtained typically resemble those of the underlying network. Stochastic block models (SBMs) have been a popular generative model to capture interactions between communities. However, practical networks most often do not exhibit interaction between every pair of nodes. Some interactions are between multiple entities and some others are constrained by geographical constraints. In my work, I propose and analyze clustering algorithms for hypergraph stochastic block models (HSBM) and block models with geometric features.


### Broadcast mechanisms on ad-hoc networks
Ad-hoc network such as wireless sensor networks (WSNs) and the Internet of Things (IoT), require key network-related information to be broadcast for efficient functioning. The communicating nodes in these networks are energy constrained and must operate in a distributed manner. Simple broadcast mechanisms such as flooding, are not energy efficient. Probabilistic forwarding has been employed as an alternative, wherein a node forwards a previously unreceived packet with some probability p. While this performs better than flooding in terms of the number of transmissions, reception of packets is not guaranteed. We propose encoding information at the source along with probabilistic forwarding. We show that on most well-connected graphs such as grids, lattices and random geometric graphs, we can have a large fraction of nodes to receive the information from the source while having lesser number of transmissions compared to probabilistic forwarding with no coding. 
<iframe width="560" height="315" src="https://www.youtube.com/embed/A38WU1r9ql8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>