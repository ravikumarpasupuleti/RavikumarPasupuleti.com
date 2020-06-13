---
author: [Ravikumar Pasupuleti]
title: 'Azure DevOps Build Release Pipeline For Create React App'

date: 2020-02-10
tags:
  - Azure DevOps
  - React
thumbnail: ../images/devops_create_react_app_thumbnail.png
popular: false
---

[Create-react-app](https://github.com/facebook/create-react-app) is the defacto for most of the websites that I work on these days. In this post, we will see how to set up a build/deploy pipeline for [create react app](https://create-react-app.dev/) in Azure DevOps. We will be using the YML format for the pipeline here, which makes it possible to have the build definitions as part of the source code.

## Build Pipeline
